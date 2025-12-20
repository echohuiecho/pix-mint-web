'use client';

import Link from 'next/link';
import LessonNavigation from '../../components/LessonNavigation';

export default function Lesson2Conclusion() {
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
            小結：你其實已經完成了「從 Canvas 走出來」的第一步
          </h1>

          <div
            className="p-8 rounded-3xl mb-8"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-xl leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              你不再只是在 Canvas 介面內「生成一個能跑的東西」，而是擁有了一個真正的專案起點：
            </p>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span style={{ color: 'var(--text-secondary)' }}>有工程結構（Next.js）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span style={{ color: 'var(--text-secondary)' }}>有可維護的入口（首頁頁面）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span style={{ color: 'var(--text-secondary)' }}>有版本控制（Git）</span>
              </li>
            </ul>
          </div>

          <div
            className="p-8 rounded-3xl mb-8"
            style={{
              backgroundColor: 'var(--background-light-blue)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              下一課預告
            </h2>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              下一課，我們會把「可以跑」再推進一步：
            </p>
            <ul className="list-none space-y-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🔐</span>
                <span className="text-lg"><strong>/api</strong> route：把 API key 藏起來</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <span className="text-lg">前端只負責 UI，後端負責 AI 呼叫</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <span className="text-lg">這一步，才是「可以公開給別人用」的基本門檻</span>
              </li>
            </ul>
          </div>

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            附：建議你在頁面底部放的 FAQ（可選）
          </h2>

          <div
            className="p-6 rounded-3xl mb-6"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Q1：為什麼不繼續留在 Canvas 直接改 HTML？
            </h3>
            <div
              className="p-4 rounded-2xl"
              style={{
                backgroundColor: 'var(--background-primary)',
                boxShadow: '0 2px 8px var(--shadow)',
              }}
            >
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Canvas 很適合快速原型，但當你要加入登入、資料、API、安全性、部署，工程結構會變得很重要。Next.js 會是更長期、更可擴展的容器。
              </p>
            </div>
          </div>

          <div
            className="p-6 rounded-3xl mb-6"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Q2：Cursor 一次搬運會不會搬得很亂？
            </h3>
            <div
              className="p-4 rounded-2xl"
              style={{
                backgroundColor: 'var(--background-primary)',
                boxShadow: '0 2px 8px var(--shadow)',
              }}
            >
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                會。這是正常的。第一課的目標只是「先跑起來」。第二、三課會慢慢把它拆得更乾淨。
              </p>
            </div>
          </div>
        </section>

        <LessonNavigation currentPage={5} totalPages={5} lessonNumber={2} />
      </div>
    </div>
  );
}
