'use client';

import Link from 'next/link';
import LessonNavigation from '../../components/LessonNavigation';

export default function Lesson2Intro() {
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
            從 Gemini Canvas 到可上線專案｜第一課：把 HTML 變成 Next.js
          </h1>

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
              你已經會在 Gemini Canvas 做出能跑的 Web App。
            </p>
            <p
              className="text-xl leading-relaxed text-center"
              style={{ color: 'var(--text-secondary)' }}
            >
              這一課，我們不再「繼續 vibe coding」，而是把它搬到一個更容易維護、能長期成長的工程結構：Next.js（含 `/api` 路由，為之後接 Edge Function／後端打底）。
            </p>
          </div>

          {/* Image Placeholder */}
          <div
            className="p-8 rounded-3xl mb-8 flex justify-center"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <img
              src="https://slowai-learn.sgp1.cdn.digitaloceanspaces.com/lesson-2/%E6%96%87%E5%AD%97%E8%BD%89%E8%89%B2%E5%99%A8-Gemini-preview.gif"
              alt="Gemini Canvas 內一個可運行的 HTML 小工具畫面"
              className="w-full h-64 md:h-80 rounded-2xl object-contain bg-[var(--background-light-blue)] overflow-hidden"
            />
          </div>

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            你會完成的成果
          </h2>
          <div
            className="p-8 rounded-3xl mb-8"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              這一課結束後，你會有：
            </p>
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span style={{ color: 'var(--text-secondary)' }}>你知道怎樣用 Cursor 快速把「一份 HTML」拆到「可維護的專案結構」</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span style={{ color: 'var(--text-secondary)' }}>一個可在本機跑起來的 <strong>Next.js Web App 專案</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span style={{ color: 'var(--text-secondary)' }}>一個已初始化的 <strong>Git repo</strong>（可推到 GitHub）</span>
              </li>
            </ul>
          </div>

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            這一課適合誰
          </h2>
          <div
            className="p-8 rounded-3xl mb-8"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <span style={{ color: 'var(--text-secondary)' }}>你已經用 Gemini / Claude / ChatGPT 生成過 HTML/CSS/JS 小工具</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <span style={{ color: 'var(--text-secondary)' }}>你想把作品「從 Canvas 介面」帶到「真正的專案」</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <span style={{ color: 'var(--text-secondary)' }}>你打算之後加入：登入、資料庫、API、Edge Function、部署</span>
              </li>
            </ul>
          </div>

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            你需要準備的東西
          </h2>
          <div
            className="p-8 rounded-3xl mb-8"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📦</span>
                <span style={{ color: 'var(--text-secondary)' }}>Node.js</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">📄</span>
                <span style={{ color: 'var(--text-secondary)' }}>一份從 Gemini Canvas 匯出的 HTML</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🖥️</span>
                <span style={{ color: 'var(--text-secondary)' }}>Cursor（或你熟悉的 AI IDE；本課以 Cursor 為示範）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <span style={{ color: 'var(--text-secondary)' }}>Git</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/lesson-2/2"
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
      </div>
    </div>
  );
}
