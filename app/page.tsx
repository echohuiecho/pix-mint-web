'use client';

import Link from 'next/link';
import { useState } from 'react';
import SubscribeModal from './components/SubscribeModal';

const FEATURES = [
  {
    id: 'learn',
    title: '循序漸進學習',
    description: '從基礎開始，一步步理解 AI 如何理解你的文字，並轉換成視覺內容。不需要技術背景，只需要好奇心。',
    icon: '📚',
    gradient: 'linear-gradient(135deg, #FFB6E1 0%, #FFC6A8 100%)',
  },
  {
    id: 'practice',
    title: '實際動手操作',
    description: '每一課都有實際練習，讓你親身體驗 AI 的運作方式，從中學習如何更好地與 AI 協作。',
    icon: '✍️',
    gradient: 'linear-gradient(135deg, #C5A8FF 0%, #FFD1B6 100%)',
  },
  {
    id: 'understand',
    title: '深入理解原理',
    description: '不只是使用工具，而是真正理解 AI 背後的運作邏輯，讓你能夠更有效地運用 AI 技術。',
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #A8DAFF 0%, #FFB6D9 100%)',
  },
] as const;

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-primary)' }}>
      <SubscribeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-5 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
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
            慢慢理解 AI
            <br />
            <span style={{ color: 'var(--color-purple)' }}>從第一課開始</span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-10 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            不需要技術背景，只需要一點好奇心。我們會一起走過 AI 如何理解你的文字，並轉換成視覺內容的過程。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lesson-1"
              className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 text-center"
              style={{
                background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
                color: 'white',
                boxShadow: '0 4px 16px rgba(140, 80, 200, 0.3)',
              }}
            >
              開始第一課（免費）
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:opacity-80 border-2 text-center"
              style={{
                borderColor: 'var(--color-blue)',
                color: 'var(--color-blue)',
                backgroundColor: 'transparent',
                boxShadow: '0 2px 8px var(--shadow)',
              }}
            >
              訂閱通知
            </button>
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
            課程特色
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            用最簡單的方式，理解 AI 背後的運作原理
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="rounded-3xl overflow-hidden transition-all hover:scale-105"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 20px var(--shadow-md)',
              }}
            >
              <div
                className="h-full p-8 flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-6"
                  style={{
                    background: feature.gradient,
                    boxShadow: '0 2px 12px var(--shadow)',
                  }}
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
            background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
            boxShadow: '0 8px 32px rgba(140, 80, 200, 0.25)',
          }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            準備好開始學習了嗎？
          </h2>
          <p
            className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
          >
            第一課免費開放，之後的課程和 slowAI App 正式上架時，我們會第一時間通知你。
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg inline-block"
            style={{
              backgroundColor: 'white',
              color: 'var(--color-purple)',
              boxShadow: '0 4px 16px rgba(255, 255, 255, 0.3)',
            }}
          >
            訂閱通知
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-lg font-bold"
              style={{
                background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
                color: 'white',
                boxShadow: '0 2px 8px var(--shadow)',
              }}
            >
              S
            </div>
            <span
              className="text-lg font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              slowAI
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
              © 2025 Noseborg. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
