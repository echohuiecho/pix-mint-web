"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { Session, User } from "@supabase/supabase-js";

interface Slide {
  title: string;
  content: string;
  image_prompt: string;
  image_url?: string;
  isGenerating?: boolean;
}

interface CarouselPlanResponse {
  caption: string;
  slides: Slide[];
}

interface ReelPlanResponse {
  caption: string;
  video_prompt: string;
}

type PostType = "carousel" | "reels";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
const DEFAULT_SPREADSHEET_ID = process.env.NEXT_PUBLIC_INSTAGRAM_SHEET_ID || "";
const DEFAULT_SHEET_NAME = process.env.NEXT_PUBLIC_INSTAGRAM_SHEET_NAME || "ig post";

export default function InstagramAdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<string | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  // Post configuration
  const [postType, setPostType] = useState<PostType>("carousel");
  const [postId, setPostId] = useState("");
  const [spreadsheetId, setSpreadsheetId] = useState(DEFAULT_SPREADSHEET_ID);
  const [sheetName, setSheetName] = useState(DEFAULT_SHEET_NAME);

  // Content state
  const [topic, setTopic] = useState("");
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [carouselPlan, setCarouselPlan] = useState<CarouselPlanResponse | null>(null);
  const [reelPlan, setReelPlan] = useState<ReelPlanResponse | null>(null);

  // Manual content state
  const [manualCaption, setManualCaption] = useState("");
  const [manualImages, setManualImages] = useState<string[]>([]); // For carousel
  const [manualVideoUrl, setManualVideoUrl] = useState(""); // For reels
  const [isUploading, setIsUploading] = useState(false);

  // Reel-specific state
  const [videoUrl, setVideoUrl] = useState("");
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);

  const [isPosting, setIsPosting] = useState(false);
  const [postResult, setPostResult] = useState<any>(null);
  const [error, setError] = useState("");

  // Initialize Supabase auth and fetch user type
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Check if Supabase is configured
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.EXPO_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
          setError('Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.');
          setIsLoadingAuth(false);
          return;
        }

        // Get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          console.error("Error getting session:", sessionError);
          setIsLoadingAuth(false);
          return;
        }

        setSession(session);
        setUser(session?.user ?? null);

        // Fetch user type from profiles table (same as Expo app)
        if (session?.user) {
          const { data, error: profileError } = await supabase
            .from('profiles')
            .select(`
              user_types (
                type,
                description
              )
            `)
            .eq('user_id', session.user.id)
            .single();

          if (profileError) {
            console.error("Error fetching user type:", profileError);
          } else {
            // user_types can be an array or single object depending on the relation
            const userTypes = data?.user_types;
            const userTypeValue = Array.isArray(userTypes)
              ? userTypes[0]?.type
              : (userTypes as any)?.type;
            setUserType(userTypeValue || null);
          }
        }

        // Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session);
          setUser(session?.user ?? null);

          if (session?.user) {
            // Fetch user type when session changes
            supabase
              .from('profiles')
              .select(`
                user_types (
                  type,
                  description
                )
              `)
              .eq('user_id', session.user.id)
              .single()
              .then(({ data, error }) => {
                if (!error && data) {
                  const userTypes = data?.user_types;
                  const userTypeValue = Array.isArray(userTypes)
                    ? userTypes[0]?.type
                    : (userTypes as any)?.type;
                  setUserType(userTypeValue || null);
                }
              });
          } else {
            setUserType(null);
          }
        });

        setIsLoadingAuth(false);

        return () => {
          subscription.unsubscribe();
        };
      } catch (err) {
        console.error("Error initializing auth:", err);
        setIsLoadingAuth(false);
      }
    };

    initAuth();
  }, []);

  const getAuthHeaders = () => {
    if (!session?.access_token) {
      throw new Error("Not authenticated. Please sign in.");
    }
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session.access_token}`,
    };
  };

  const handleSignIn = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!signInEmail || !signInPassword) {
      setError("Please enter both email and password");
      return;
    }

    setIsSigningIn(true);
    setError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: signInEmail,
        password: signInPassword,
      });

      if (error) {
        setError(`Sign in error: ${error.message}`);
        setIsSigningIn(false);
        return;
      }

      if (data.session) {
        setSession(data.session);
        setUser(data.user);
        // User type will be fetched by the auth state change listener
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    setUserType(null);
    setCarouselPlan(null);
    setReelPlan(null);
    setVideoUrl("");
  };

  const handleGeneratePlan = async () => {
    if (!topic) return;
    if (!session) {
      setError("Please sign in first");
      return;
    }
    if (userType !== "super_admin") {
      setError("Super admin access required");
      return;
    }
    setIsGeneratingPlan(true);
    setError("");
    setCarouselPlan(null);
    setReelPlan(null);
    setVideoUrl("");

    try {
      const endpoint = postType === "carousel"
        ? "/instagram/generate-plan"
        : "/instagram/generate-reel-plan";

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || "Failed to generate plan");
      }

      const data = await response.json();

      if (postType === "carousel") {
        setCarouselPlan(data);
      } else {
        setReelPlan(data);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setIsGeneratingPlan(false);
    }
  };

  const handleGenerateImage = async (index: number) => {
    if (!carouselPlan) return;
    if (!session) {
      setError("Please sign in first");
      return;
    }

    const newSlides = [...carouselPlan.slides];
    newSlides[index].isGenerating = true;
    setCarouselPlan({ ...carouselPlan, slides: newSlides });

    try {
      const slide = newSlides[index];
      const response = await fetch(`${API_BASE_URL}/ai-create/text-to-image`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          text_prompt: slide.image_prompt,
          art_style: "photographic",
          num_variations: 1,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const data = await response.json();
      if (data.image_urls && data.image_urls.length > 0) {
        newSlides[index].image_url = data.image_urls[0];
      }
    } catch (err: any) {
      console.error(err);
      alert("Failed to generate image for slide " + (index + 1));
    } finally {
      newSlides[index].isGenerating = false;
      setCarouselPlan({ ...carouselPlan, slides: newSlides });
    }
  };

  const handleGenerateVideo = async () => {
    if (!reelPlan) return;
    if (!session) {
      setError("Please sign in first");
      return;
    }

    setIsGeneratingVideo(true);
    setError("");

    try {
      // Note: Video generation endpoint may need to be implemented
      // For now, we'll use text-to-video if available, or show a message
      const response = await fetch(`${API_BASE_URL}/ai-create/text-to-video`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          text_prompt: reelPlan.video_prompt,
          duration: 15, // 15 seconds default
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || "Video generation not available. Please upload a video URL manually.");
      }

      const data = await response.json();
      if (data.video_url) {
        setVideoUrl(data.video_url);
        setManualVideoUrl(data.video_url);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to generate video. You can manually enter a video URL.");
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setError("");

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        // Convert file to base64 or upload to a service
        // For now, we'll create a data URL (in production, upload to your backend/CDN)
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const result = e.target?.result as string;
            resolve(result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      const uploadedUrls = await Promise.all(uploadPromises);

      if (postType === "carousel") {
        if (index !== undefined) {
          // Update specific slide image
          if (carouselPlan) {
            const newSlides = [...carouselPlan.slides];
            newSlides[index].image_url = uploadedUrls[0];
            setCarouselPlan({ ...carouselPlan, slides: newSlides });
          }
        } else {
          // Add to manual images array
          setManualImages([...manualImages, ...uploadedUrls]);
        }
      }
    } catch (err: any) {
      setError(err.message || "Failed to upload image(s)");
    } finally {
      setIsUploading(false);
      // Reset input
      event.target.value = "";
    }
  };

  const handleVideoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError("");

    try {
      // Convert file to data URL (in production, upload to your backend/CDN)
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setManualVideoUrl(result);
        setVideoUrl(result);
      };
      reader.onerror = () => {
        setError("Failed to read video file");
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
      setIsUploading(false);
    } catch (err: any) {
      setError(err.message || "Failed to upload video");
      setIsUploading(false);
    }
  };

  const removeManualImage = (index: number) => {
    setManualImages(manualImages.filter((_, i) => i !== index));
  };

  const handlePostToInstagram = async () => {
    if (!session) {
      setError("Please sign in first");
      return;
    }
    if (userType !== "super_admin") {
      setError("Super admin access required");
      return;
    }
    if (!postId.trim()) {
      setError("Post ID is required for Google Sheets tracking");
      return;
    }

    // Determine caption - use manual if provided, otherwise use from plan
    const finalCaption = manualCaption.trim() ||
      (postType === "carousel" ? carouselPlan?.caption : reelPlan?.caption) || "";

    if (!finalCaption.trim()) {
      setError("Caption is required. Please enter a caption or generate a plan.");
      return;
    }

    // Validate based on post type
    if (postType === "carousel") {
      // Use manual images if available, otherwise use plan images
      const imageUrls = manualImages.length > 0
        ? manualImages
        : (carouselPlan?.slides.map(s => s.image_url).filter(Boolean) as string[] || []);

      if (imageUrls.length < 2) {
        setError("Carousel requires at least 2 images. Please upload images or generate a plan with images.");
        return;
      }
      if (imageUrls.length > 10) {
        setError("Carousel can have at most 10 images.");
        return;
      }

      setIsPosting(true);
      setError("");

      try {
        const requestBody = {
          post_type: "carousel",
          post_id: postId.trim(),
          spreadsheet_id: spreadsheetId || undefined,
          sheet_name: sheetName || undefined,
          caption: finalCaption,
          image_urls: imageUrls,
        };

        const response = await fetch(`${API_BASE_URL}/instagram/post`, {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.detail || "Failed to post to Instagram");
        }

        const result = await response.json();
        setPostResult(result);
      } catch (err: any) {
        setError(err.message || "Failed to post");
      } finally {
        setIsPosting(false);
      }
    } else {
      // Reels
      const finalVideoUrl = manualVideoUrl.trim() || videoUrl.trim();

      if (!finalVideoUrl) {
        setError("Video URL is required. Please upload a video or provide a video URL.");
        return;
      }

      setIsPosting(true);
      setError("");

      try {
        const requestBody = {
          post_type: "reels",
          post_id: postId.trim(),
          spreadsheet_id: spreadsheetId || undefined,
          sheet_name: sheetName || undefined,
          caption: finalCaption,
          video_url: finalVideoUrl,
        };

        const response = await fetch(`${API_BASE_URL}/instagram/post`, {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.detail || "Failed to post to Instagram");
        }

        const result = await response.json();
        setPostResult(result);
      } catch (err: any) {
        setError(err.message || "Failed to post");
      } finally {
        setIsPosting(false);
      }
    }
  };

  if (isLoadingAuth) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!session || !user) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Instagram Automation Admin</h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">Sign In</h2>
          <p className="text-gray-600 mb-6 text-center text-sm">
            Please sign in with your super_admin account to access the Instagram admin panel.
          </p>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="email@example.com"
                autoComplete="email"
                disabled={isSigningIn}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                autoComplete="current-password"
                disabled={isSigningIn}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSigningIn}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {isSigningIn ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (userType !== "super_admin") {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Instagram Automation Admin</h1>
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Access Denied</h2>
          <p className="text-red-600 mb-4">
            This page requires super_admin access. Your current user type: <strong>{userType || "none"}</strong>
          </p>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Instagram Automation Admin</h1>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Signed in as: <strong>{user.email}</strong>
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Post Type Selector */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Post Type
        </label>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setPostType("carousel");
              setReelPlan(null);
              setVideoUrl("");
              setManualVideoUrl("");
              setManualImages([]);
            }}
            className={`flex-1 py-3 px-6 rounded-lg border-2 transition-all ${
              postType === "carousel"
                ? "border-blue-600 bg-blue-50 text-blue-700"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            <div className="text-lg font-semibold">Carousel</div>
            <div className="text-sm opacity-75">Multiple images (2-10 slides)</div>
          </button>
          <button
            onClick={() => {
              setPostType("reels");
              setCarouselPlan(null);
              setManualImages([]);
            }}
            className={`flex-1 py-3 px-6 rounded-lg border-2 transition-all ${
              postType === "reels"
                ? "border-purple-600 bg-purple-50 text-purple-700"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            <div className="text-lg font-semibold">Reels</div>
            <div className="text-sm opacity-75">Single video (15-60 seconds)</div>
          </button>
        </div>
      </div>

      {/* Post ID and Sheet Config */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Post ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md text-gray-900"
              placeholder="e.g., 5-trad-chinese-text-gen"
              value={postId}
              onChange={(e) => setPostId(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-1">ID matching your Google Sheet row</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Spreadsheet ID
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md text-gray-900 text-sm"
              placeholder="Google Sheets ID"
              value={spreadsheetId}
              onChange={(e) => setSpreadsheetId(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Sheet Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md text-gray-900"
              placeholder="ig post"
              value={sheetName}
              onChange={(e) => setSheetName(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Manual Caption Input (Always Available) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Caption <span className="text-gray-500 font-normal">(or generate from topic below)</span>
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md h-32 text-gray-900"
          placeholder="Enter your Instagram caption with hashtags..."
          value={manualCaption}
          onChange={(e) => setManualCaption(e.target.value)}
        />
        <p className="text-xs text-gray-500 mt-1">
          You can enter a caption manually or generate one from a topic below
        </p>
      </div>

      {/* Manual Upload Section */}
      {postType === "carousel" && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Images Manually</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Images (2-10 images required)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              disabled={isUploading}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <p className="text-xs text-gray-500 mt-1">
              Select multiple images for your carousel (or generate images from prompts below)
            </p>
          </div>

          {manualImages.length > 0 && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Uploaded Images ({manualImages.length})
              </label>
              <div className="grid grid-cols-4 gap-4">
                {manualImages.map((url, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={url}
                      alt={`Uploaded ${index + 1}`}
                      className="w-full h-32 object-cover rounded-md border border-gray-200"
                    />
                    <button
                      onClick={() => removeManualImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {postType === "reels" && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Video Manually</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Video File
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              disabled={isUploading}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload a video file (or enter a video URL below, or generate from prompt)
            </p>
          </div>

          {manualVideoUrl && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Uploaded Video</label>
              <video
                src={manualVideoUrl}
                controls
                className="w-full max-w-md rounded-lg border border-gray-200"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      )}

      {/* Topic Input (for AI Generation) */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Post Topic / Idea <span className="text-gray-500 font-normal">(optional - for AI generation)</span>
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md h-32 text-gray-900"
          placeholder={postType === "carousel"
            ? "E.g., Explain why large language models hallucinate..."
            : "E.g., Quick tips for better prompting with AI..."
          }
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button
          onClick={handleGeneratePlan}
          disabled={!topic || isGeneratingPlan}
          className={`mt-4 px-6 py-2 text-white rounded-md disabled:opacity-50 ${
            postType === "carousel"
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {isGeneratingPlan
            ? "Generating Plan..."
            : postType === "carousel"
              ? "Generate Carousel Plan"
              : "Generate Reel Plan"
          }
        </button>
        <p className="text-xs text-gray-500 mt-2">
          Generate AI content from a topic, or use your manual uploads above
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-8">
          Error: {error}
        </div>
      )}

      {/* Carousel Plan Editor */}
      {postType === "carousel" && carouselPlan && (
        <div className="space-y-8">
          {/* Caption Editor (from generated plan) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Generated Caption</h2>
            <p className="text-xs text-gray-500 mb-2">This caption will be used if you haven't entered a manual caption above</p>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md h-48 font-mono text-sm text-gray-900"
              value={carouselPlan.caption}
              onChange={(e) => setCarouselPlan({ ...carouselPlan, caption: e.target.value })}
            />
          </div>

          {/* Slides Editor */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Slides ({carouselPlan.slides.length})</h2>
            {carouselPlan.slides.map((slide, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex gap-6">
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase">Title</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md text-gray-900"
                      value={slide.title}
                      onChange={(e) => {
                        const newSlides = [...carouselPlan.slides];
                        newSlides[index].title = e.target.value;
                        setCarouselPlan({ ...carouselPlan, slides: newSlides });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase">Content</label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md h-20 text-gray-900"
                      value={slide.content}
                      onChange={(e) => {
                        const newSlides = [...carouselPlan.slides];
                        newSlides[index].content = e.target.value;
                        setCarouselPlan({ ...carouselPlan, slides: newSlides });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 uppercase">Image Prompt</label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md h-20 text-sm text-gray-600"
                      value={slide.image_prompt}
                      onChange={(e) => {
                        const newSlides = [...carouselPlan.slides];
                        newSlides[index].image_prompt = e.target.value;
                        setCarouselPlan({ ...carouselPlan, slides: newSlides });
                      }}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleGenerateImage(index)}
                      disabled={slide.isGenerating}
                      className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 disabled:opacity-50"
                    >
                      {slide.isGenerating ? "Generating..." : "Generate Image"}
                    </button>
                    <label className="px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 cursor-pointer">
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, index)}
                      />
                    </label>
                  </div>
                </div>

                {/* Image Preview */}
                <div className="w-64 h-64 bg-gray-100 rounded-md flex items-center justify-center border border-gray-200 overflow-hidden">
                  {slide.image_url ? (
                    <img src={slide.image_url} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400 text-sm">No Image</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Post Button */}
          <div className="flex justify-end pt-4 gap-4 items-center">
            {!postId.trim() && (
              <span className="text-amber-600 text-sm">Post ID required</span>
            )}
            {manualImages.length === 0 && (!carouselPlan || carouselPlan.slides.every(s => !s.image_url)) && (
              <span className="text-amber-600 text-sm">At least 2 images required</span>
            )}
            <button
              onClick={handlePostToInstagram}
              disabled={isPosting || !postId.trim() || (manualImages.length === 0 && (!carouselPlan || carouselPlan.slides.every(s => !s.image_url)))}
              className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700 disabled:opacity-50 shadow-lg"
            >
              {isPosting ? "Posting to Instagram..." : "Post Carousel"}
            </button>
          </div>
        </div>
      )}

      {/* Reel Plan Editor */}
      {postType === "reels" && reelPlan && (
        <div className="space-y-8">
          {/* Caption Editor (from generated plan) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Generated Caption</h2>
            <p className="text-xs text-gray-500 mb-2">This caption will be used if you haven't entered a manual caption above</p>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md h-48 font-mono text-sm text-gray-900"
              value={reelPlan.caption}
              onChange={(e) => setReelPlan({ ...reelPlan, caption: e.target.value })}
            />
          </div>

          {/* Video Prompt & Generation */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Video</h2>

            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-500 uppercase mb-2">Video Prompt (for reference)</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md h-24 text-sm text-gray-600"
                value={reelPlan.video_prompt}
                onChange={(e) => setReelPlan({ ...reelPlan, video_prompt: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-500 uppercase mb-2">
                Video URL <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  className="flex-1 p-3 border border-gray-300 rounded-md text-gray-900"
                  placeholder="https://example.com/video.mp4"
                  value={manualVideoUrl || videoUrl}
                  onChange={(e) => {
                    setManualVideoUrl(e.target.value);
                    setVideoUrl(e.target.value);
                  }}
                />
                <button
                  onClick={handleGenerateVideo}
                  disabled={isGeneratingVideo || !reelPlan}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50"
                >
                  {isGeneratingVideo ? "Generating..." : "Generate Video"}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Enter a publicly accessible video URL, upload a file above, or use Generate Video if available
              </p>
            </div>

            {/* Video Preview */}
            {(videoUrl || manualVideoUrl) && (
              <div className="mt-4">
                <label className="block text-xs font-medium text-gray-500 uppercase mb-2">Preview</label>
                <video
                  src={manualVideoUrl || videoUrl}
                  controls
                  className="w-full max-w-md rounded-lg border border-gray-200"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          {/* Post Button */}
          <div className="flex justify-end pt-4 gap-4 items-center">
            {!postId.trim() && (
              <span className="text-amber-600 text-sm">Post ID required</span>
            )}
            {!videoUrl.trim() && !manualVideoUrl.trim() && (
              <span className="text-amber-600 text-sm">Video URL required</span>
            )}
            <button
              onClick={handlePostToInstagram}
              disabled={isPosting || !postId.trim() || (!videoUrl.trim() && !manualVideoUrl.trim())}
              className="px-8 py-3 bg-purple-600 text-white text-lg font-semibold rounded-md hover:bg-purple-700 disabled:opacity-50 shadow-lg"
            >
              {isPosting ? "Posting to Instagram..." : "Post Reel"}
            </button>
          </div>
        </div>
      )}

      {postResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Posted Successfully!</h2>
            <p className="text-gray-600 mb-4">
              Your {postType === "carousel" ? "carousel" : "reel"} is now live on Instagram.
            </p>

            {postResult.sheet_updated && (
              <div className="bg-green-50 text-green-700 p-3 rounded-md mb-4 text-sm">
                ✓ Google Sheet updated with post details
              </div>
            )}
            {!postResult.sheet_updated && spreadsheetId && (
              <div className="bg-amber-50 text-amber-700 p-3 rounded-md mb-4 text-sm">
                ⚠ Could not update Google Sheet
              </div>
            )}

            <div className="text-sm text-gray-500 mb-4">
              <p>Media ID: {postResult.media_id}</p>
              <p>Post ID: {postId}</p>
            </div>

            <a
              href={postResult.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-3"
            >
              View on Instagram
            </a>
            <button
              onClick={() => {
                setPostResult(null);
                // Reset for new post
                setCarouselPlan(null);
                setReelPlan(null);
                setVideoUrl("");
                setManualVideoUrl("");
                setManualImages([]);
                setManualCaption("");
                setTopic("");
                setPostId("");
              }}
              className="block w-full py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Create New Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

