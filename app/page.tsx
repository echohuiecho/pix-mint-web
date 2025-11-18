'use client';

import Link from 'next/link';

const FEATURES = [
  {
    id: 'ai-create',
    title: 'AI Create',
    description: 'Transform your ideas into stunning artwork with the power of artificial intelligence. Generate unique, creative visuals in seconds.',
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #FFB6E1 0%, #FFC6A8 100%)',
  },
  {
    id: 'ai-poster',
    title: 'AI Poster',
    description: 'Design professional posters effortlessly. Our AI helps you create eye-catching designs that stand out from the crowd.',
    icon: '📰',
    gradient: 'linear-gradient(135deg, #C5A8FF 0%, #FFD1B6 100%)',
  },
  {
    id: 'ai-chart',
    title: 'AI Chart',
    description: 'Create flowcharts, diagrams, and visual representations of complex ideas. Perfect for presentations and documentation.',
    icon: '🗺️',
    gradient: 'linear-gradient(135deg, #A8DAFF 0%, #FFB6D9 100%)',
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-primary)' }}>
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-5 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Create Amazing Content
            <br />
            <span style={{ color: 'var(--primary)' }}>Powered by AI</span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-10 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Transform your ideas into stunning artwork, beautiful posters, and professional charts with the power of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:opacity-90 shadow-lg text-center"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'white',
                boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)',
              }}
            >
              Start Creating
            </a>
            <Link
              href="/learn-more"
              className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:opacity-80 border-2 text-center"
              style={{
                borderColor: 'var(--primary)',
                color: 'var(--primary)',
                backgroundColor: 'transparent',
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Powerful Features
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Everything you need to bring your creative vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl overflow-hidden shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{
                boxShadow: '0 4px 12px var(--shadow)',
              }}
            >
              <div
                className="h-full p-8 flex flex-col"
                style={{ backgroundColor: 'var(--background-secondary)' }}
              >
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6"
                  style={{ background: feature.gradient }}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-base leading-relaxed flex-grow"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="max-w-7xl mx-auto px-5 py-20">
        <div
          className="rounded-3xl p-12 md:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #4A90E2 0%, #42E100 100%)',
            boxShadow: '0 8px 24px rgba(74, 144, 226, 0.3)',
          }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Ready to Get Started?
          </h2>
          <p
            className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
          >
            Join thousands of creators who are already using Pix Mint to bring their ideas to life.
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
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-5 py-12 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold"
              style={{
                background: 'linear-gradient(135deg, #4A90E2 0%, #42E100 100%)',
                color: 'white',
              }}
            >
              P
            </div>
            <span
              className="text-lg font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              Pix Mint
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/learn-more"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ color: 'var(--text-secondary)' }}
              >
                Learn More
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ color: 'var(--text-secondary)' }}
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm hover:opacity-70 transition-opacity"
                style={{ color: 'var(--text-secondary)' }}
              >
                Privacy Policy
              </Link>
            </div>
            <p
              className="text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              © 2025 PixLab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
