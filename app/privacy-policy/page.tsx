'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString();

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
              P
            </div>
            <span
              className="text-xl font-bold"
              style={{ color: 'var(--text-primary)' }}
            >
              Pix Mint
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
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 py-12">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-sm mb-12 text-center italic"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Last Updated: {lastUpdated}
        </p>

        <div className="space-y-8">
          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-purple)' }}
            >
              1. Information We Collect
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              We collect the following types of information to provide and improve our AI-powered creative services:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • <strong>Account Information:</strong> Email address and authentication data when you create an account
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • <strong>Profile Information:</strong> User name and payment status
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • <strong>Images and Videos:</strong> Photos and videos you upload for AI processing, editing, or generation
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • <strong>AI Prompts and Inputs:</strong> Text prompts, style preferences, and parameters you provide for AI generation
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • <strong>Generated Content:</strong> AI-generated images, videos, posters, charts, and other creative content
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • <strong>Payment Information:</strong> Subscription and purchase data processed through RevenueCat (payment details are handled by Apple/Google)
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • <strong>Usage Data:</strong> How you interact with our app, features used, and service performance metrics
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • <strong>Device Information:</strong> Device type, operating system, and app version for compatibility and optimization
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-purple)' }}
            >
              2. How We Use Your Information
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              We use your information to:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Provide AI-powered creative services including image generation, editing, poster creation and other AI features.
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Process your images and videos through AI models for object removal, background editing, style transformation, and other features
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Generate AI content based on your prompts and preferences
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Manage your subscriptions and process payments
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Improve and personalize your experience with our AI features
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Communicate with you about our services, updates, and important notices
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Ensure the security and reliability of our services
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Analyze usage patterns to enhance our AI models and features
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-purple)' }}
            >
              3. Information Storage
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              We store your data securely using:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Supabase for user authentication and profile data
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • MongoDB for your content metadata, projects, and app data
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • DigitalOcean Spaces for image, video, and generated content storage
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • RevenueCat for subscription and purchase information
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-purple)' }}
            >
              4. Information Sharing and Third-Party Services
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              We share your information in the following ways:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • <strong>AI Processing:</strong> Your images and prompts are processed by third-party AI services (Google Gemini, OpenAI) to generate and edit content. These services process your data according to their privacy policies.
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • <strong>Payment Processing:</strong> Subscription and purchase information is handled by RevenueCat, Apple, and Google according to their respective privacy policies
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Your generated content is stored privately and only accessible to you unless you choose to share it
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • We do not sell your personal information to third parties
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • We may use aggregated, anonymized data to improve our services
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-purple)' }}
            >
              5. Your Rights
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              You have the right to:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Access your personal information and generated content
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Update or correct your profile information
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Delete your account and associated data, including uploaded images and generated content
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Export your generated content and projects
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Control which content you share and keep private
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-purple)' }}
            >
              6. Data Security
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              We implement security measures including:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Encrypted data transmission (HTTPS/TLS) for all API communications
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Secure authentication using JWT tokens and Supabase Auth
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Secure cloud storage with access controls for your images and content
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Regular security updates and monitoring
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Limited access to your data - only processed for the specific AI features you request
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-purple)' }}
            >
              7. Changes to Privacy Policy
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-purple)' }}
            >
              8. AI-Generated Content
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              When you use our AI features:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Your prompts and images are sent to third-party AI services (Google Gemini, OpenAI) for processing
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • Generated content is stored securely and associated with your account
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • You retain ownership of AI-generated content created from your inputs
              </li>
              <li
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                • AI services may use your data according to their privacy policies for service improvement
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-purple)' }}
            >
              9. Contact Us
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              If you have any questions about this privacy policy or our practices, please contact us through the app or via email.
            </p>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 flex flex-wrap gap-6 justify-center">
          <Link
            href="/"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-purple)' }}
          >
            Home
          </Link>
          <Link
            href="/learn-more"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-purple)' }}
          >
            Learn More
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-purple)' }}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}

