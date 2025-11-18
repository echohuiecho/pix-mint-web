'use client';

import Link from 'next/link';

export default function LearnMore() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-primary)' }}>
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-5 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #4A90E2 0%, #42E100 100%)',
                color: 'white',
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
            className="px-6 py-2.5 rounded-xl font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
            }}
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 py-12">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          About Pix Mint
        </h1>
        <p
          className="text-xl mb-12 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Pix Mint is an AI-powered creative platform that empowers you to transform your ideas into stunning visual content. Whether you're creating artwork, designing posters, or building flowcharts, our advanced AI technology makes professional-quality creation accessible to everyone.
        </p>

        {/* Features Section */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            What Makes Pix Mint Special
          </h2>

          <div className="space-y-8">
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: 'var(--primary)' }}
              >
                🎨 AI Create
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Generate unique, creative artwork from simple text prompts. Our AI understands your vision and brings it to life with stunning visuals. Perfect for artists, designers, and anyone looking to explore their creativity.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: 'var(--primary)' }}
              >
                📰 AI Poster
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Design professional posters effortlessly. Our AI helps you create eye-catching designs that stand out. From event posters to marketing materials, create stunning visuals in minutes.
              </p>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: 'var(--primary)' }}
              >
                🗺️ AI Chart
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Create flowcharts, diagrams, and visual representations of complex ideas. Perfect for presentations, documentation, and explaining concepts visually. Our AI understands your requirements and generates professional diagrams.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <div className="text-4xl mb-4">1️⃣</div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Describe Your Idea
              </h3>
              <p
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                Enter a text prompt or describe what you want to create
              </p>
            </div>
            <div
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <div className="text-4xl mb-4">2️⃣</div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                AI Generates Content
              </h3>
              <p
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                Our advanced AI processes your request and creates unique content
              </p>
            </div>
            <div
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <div className="text-4xl mb-4">3️⃣</div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                Download & Share
              </h3>
              <p
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                Get your creation and use it however you need
              </p>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Powered by Advanced AI
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            Pix Mint leverages cutting-edge AI technology from leading providers including Google Gemini and OpenAI to deliver high-quality creative outputs. Our platform combines the best of multiple AI models to ensure you get the results you're looking for.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            All AI processing is done securely, and you retain full ownership of the content you create. Your prompts and generated content are stored safely and privately.
          </p>
        </section>

        {/* CTA */}
        <section
          className="rounded-3xl p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, #4A90E2 0%, #42E100 100%)',
          }}
        >
          <h2
            className="text-3xl font-bold mb-4 text-white"
          >
            Ready to Start Creating?
          </h2>
          <p
            className="text-lg mb-6 text-white/90"
          >
            Download Pix Mint and bring your ideas to life
          </p>
          <a
            href="https://apps.apple.com/app/pix-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:opacity-90 shadow-lg inline-block"
            style={{
              backgroundColor: 'white',
              color: 'var(--primary)',
            }}
          >
            Download Now
          </a>
        </section>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t flex flex-wrap gap-6 justify-center" style={{ borderColor: 'var(--border)' }}>
          <Link
            href="/terms-of-service"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--primary)' }}
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: 'var(--primary)' }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

