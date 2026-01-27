'use client';

import { useState } from 'react';
import Link from 'next/link';
import LessonNavigation from '../../components/LessonNavigation';

export default function TeachElderlyImgGenPage4() {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const prompt = `場景是香港城市街景，主角是一群老人家

風格：吉卜力風`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = async () => {
    const imageUrl = 'https://uploads-pixmint.sgp1.cdn.digitaloceanspaces.com/uploads-pixmint-1759585587760/ai-generated-images/ChatGPT%20Image%20Jan%2027,%202026,%2004_52_34%20PM_converted.jpg';
    const filename = 'reference-image.jpg';

    try {
      setDownloading(true);

      // Use API route to proxy the image download (bypasses CORS)
      const proxyUrl = `/api/download-image?url=${encodeURIComponent(imageUrl)}`;
      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }

      const blob = await response.blob();

      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);

      // Create a temporary anchor element and trigger download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      setDownloading(false);
    } catch (err) {
      console.error('Failed to download image:', err);
      setDownloading(false);
      // Fallback: open in new tab if download fails
      window.open(imageUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-primary)' }}>
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-5 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl font-bold"
              style={{
                background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
                color: 'white',
                boxShadow: '0 2px 8px var(--shadow)',
              }}
            >
              S
            </div>
            <span
              className="text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              slowAI
            </span>
          </Link>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-2xl font-semibold transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
              color: 'white',
              boxShadow: '0 4px 12px rgba(140, 80, 200, 0.25)',
            }}
          >
            返回首頁
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 py-12">
        <section className="mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            生成圖片體驗 #4
          </h1>

          <div
            className="p-6 rounded-3xl mb-6"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              圖片協助 - 生成吉卜力風合照
            </h2>
            <div
              className="p-4 rounded-2xl mb-4 font-mono text-lg whitespace-pre-wrap"
              style={{
                backgroundColor: 'var(--background-darker)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              {prompt}
            </div>
            <button
              onClick={handleCopy}
              className="w-full px-6 py-3 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 mb-4"
              style={{
                background: copied
                  ? 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
                  : 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
                color: 'white',
                boxShadow: '0 4px 12px rgba(140, 80, 200, 0.25)',
              }}
            >
              {copied ? (
                <>
                  <span>✓</span>
                  <span>已複製！</span>
                </>
              ) : (
                <>
                  <span>📋</span>
                  <span>複製提示詞</span>
                </>
              )}
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="block w-full px-6 py-3 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 text-center disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: downloading
                  ? 'linear-gradient(90deg, #6b7280 0%, #4b5563 100%)'
                  : 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.25)',
              }}
            >
              {downloading ? (
                <>
                  <span>⏳</span>
                  <span>下載中...</span>
                </>
              ) : (
                <>
                  <span>⬇️</span>
                  <span>下載協助圖片</span>
                </>
              )}
            </button>
          </div>
        </section>

        <LessonNavigation currentPage={4} totalPages={4} lessonNumber={0} customPath="/teach-elderly-img-gen" />
      </div>
    </div>
  );
}
