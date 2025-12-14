'use client';

import Link from 'next/link';
import LessonNavigation from '../components/LessonNavigation';

export default function Lesson1Intro() {
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
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            📚 第一課：由一句心情，到一張貼圖
          </h1>

          {/* Image Placeholder - Generate with prompt: "A friendly, modern illustration showing a person writing a message on their phone, with soft pastel colors, rounded shapes, and a warm, approachable feeling. The style should be playful and clean, similar to 3D felt-like characters with googly eyes." */}
          <div
            className="w-full h-64 md:h-80 rounded-3xl mb-8 flex items-center justify-center"
            style={{
              backgroundColor: 'var(--background-light-purple)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              [圖片位置 - 生成提示見註釋]
            </p>
          </div>

          <div
            className="p-8 rounded-3xl mb-8"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-xl leading-relaxed mb-6 text-center"
              style={{ color: 'var(--text-secondary)' }}
            >
              🎯 在這一課，你不需要懂專有名詞，只需要：
            </p>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <span style={{ color: 'var(--text-secondary)' }}>一點點好奇心</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">💭</span>
                <span style={{ color: 'var(--text-secondary)' }}>一句你今天真實的心情說話</span>
              </li>
            </ul>
          </div>

          <div
            className="p-8 rounded-3xl mb-8"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <h2
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              🚀 我們會一起走過三個步驟：
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl" style={{ backgroundColor: 'var(--background-light-blue)' }}>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-purple)' }}>1</div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    ✍️ 寫下一句你真正想說的「Social Energy 狀態」
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    就像跟朋友聊天一樣，說出你今天的真實感受
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl" style={{ backgroundColor: 'var(--background-light-purple)' }}>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-purple)' }}>2</div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    🔍 看看 AI 怎樣拆解這句話裡的線索
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    了解 AI 如何理解你的情緒、角色和場景
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl" style={{ backgroundColor: 'var(--background-light-green)' }}>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-purple)' }}>3</div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    🎨 用這些線索，生成一張屬於你的 Social Energy 貼圖
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    見證 AI 如何將文字轉換成視覺內容
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/lesson-1/2"
              className="inline-block px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
                color: 'white',
                boxShadow: '0 4px 16px rgba(140, 80, 200, 0.3)',
              }}
            >
              🎯 開始第一課 →
            </Link>
          </div>
        </section>

        <LessonNavigation currentPage={1} totalPages={7} />
      </div>
    </div>
  );
}
