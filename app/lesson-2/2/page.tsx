'use client';

import Link from 'next/link';
import LessonNavigation from '../../components/LessonNavigation';

export default function Lesson2Step1And2() {
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
            Step 1-2｜把 Canvas 的 HTML + 建立 Next.js 專案
          </h1>

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
                目標
              </h3>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                先把 Canvas 產物變成 Next.js 專案的入口頁面
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                建立一個乾淨、標準、可長期擴展的專案骨架。
              </p>
            </div>

          {/* Part 1: Save HTML */}
          <div className="mb-12">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Part 1：把 Canvas 的 HTML 複製
            </h2>

            <div
              className="p-6 rounded-3xl mb-6"
              style={{
                backgroundColor: 'var(--background-light-blue)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                小提醒
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                暫時不要急著改內容。我們先保留原樣，讓 Cursor 幫你做「搬運＋整理」。
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
                src="https://slowai-learn.sgp1.cdn.digitaloceanspaces.com/lesson-2/%E6%96%87%E5%AD%97%E8%BD%89%E8%89%B2%E5%99%A8-HTML-prototype.png"
                alt="下載或複製 Canvas 產出的 HTML 原始碼（包含 style 與 script）"
                className="max-h-full max-w-full rounded-xl border"
                style={{ boxShadow: '0 2px 8px rgba(80,80,100,.07)' }}
              />
            </div>
          </div>


          {/* Part 2: Create Next.js Project */}
          <div className="mb-12">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Part 2：建立 Next.js 專案
            </h2>

            {/* Prerequisites: Install Node.js and Git */}
            <div
              className="p-6 rounded-3xl mb-6"
              style={{
                backgroundColor: 'var(--background-light-blue)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                前置準備：安裝 Node.js 和 Git
              </h3>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                在建立 Next.js 專案之前，請先確認你的電腦已安裝 Node.js 和 Git。
              </p>

              {/* Node.js Installation */}
              <div className="mb-6">
                <h4
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  📦 安裝 Node.js
                </h4>
                <p
                  className="text-base leading-relaxed mb-3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Node.js 是執行 JavaScript 的運行環境，Next.js 需要它才能運作。
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-3" style={{ color: 'var(--text-secondary)' }}>
                  <li className="text-base">
                    前往 <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--gradient-blue-end)' }}>nodejs.org</a>
                  </li>
                  <li className="text-base">下載 LTS（長期支援）版本（建議選擇）</li>
                  <li className="text-base">執行安裝程式並依照指示完成安裝</li>
                  <li className="text-base">在 Terminal 中驗證安裝：</li>
                </ol>
                <pre
                  className="p-4 rounded-2xl overflow-x-auto"
                  style={{
                    backgroundColor: 'var(--background-primary)',
                    color: 'var(--text-primary)',
                    boxShadow: '0 2px 8px var(--shadow-md)',
                  }}
                >
                  <code>{`node --version`}</code>
                </pre>
                <p
                  className="text-sm mt-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  💡 應該會顯示版本號，例如：v20.11.0
                </p>
              </div>

              {/* Git Installation */}
              <div>
                <h4
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--text-primary)' }}
                >
                  🔧 安裝 Git
                </h4>
                <p
                  className="text-base leading-relaxed mb-3"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Git 是版本控制系統，雖然建立 Next.js 專案不一定需要，但建議安裝以便後續管理程式碼。
                </p>
                <div className="mb-3">
                  <p className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    macOS：
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mb-3" style={{ color: 'var(--text-secondary)' }}>
                    <li className="text-base">
                      使用 Homebrew：<code className="px-2 py-1 rounded text-sm" style={{ backgroundColor: 'var(--background-primary)' }}>brew install git</code>
                    </li>
                    <li className="text-base">
                      或前往 <a href="https://git-scm.com/download/mac" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--gradient-blue-end)' }}>git-scm.com/download/mac</a> 下載安裝程式
                    </li>
                  </ol>
                </div>
                <div className="mb-3">
                  <p className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Windows：
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mb-3" style={{ color: 'var(--text-secondary)' }}>
                    <li className="text-base">
                      前往 <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--gradient-blue-end)' }}>git-scm.com/download/win</a>
                    </li>
                    <li className="text-base">下載並執行安裝程式</li>
                    <li className="text-base">安裝時建議選擇「Git from the command line and also from 3rd-party software」</li>
                  </ol>
                </div>
                <p className="text-base mb-3" style={{ color: 'var(--text-secondary)' }}>
                  在 Terminal 中驗證安裝：
                </p>
                <pre
                  className="p-4 rounded-2xl overflow-x-auto"
                  style={{
                    backgroundColor: 'var(--background-primary)',
                    color: 'var(--text-primary)',
                    boxShadow: '0 2px 8px var(--shadow-md)',
                  }}
                >
                  <code>{`git --version`}</code>
                </pre>
                <p
                  className="text-sm mt-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  💡 應該會顯示版本號，例如：git version 2.42.0
                </p>
              </div>
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
                src="https://slowai-learn.sgp1.cdn.digitaloceanspaces.com/lesson-2/git-node-version.jpg"
                alt="Terminal 顯示 git 和 node 版本號"
                className="max-h-full max-w-full rounded-xl border"
                style={{ boxShadow: '0 2px 8px rgba(80,80,100,.07)' }}
              />
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
                指令（在 Terminal）
              </h3>
              <pre
                className="p-4 rounded-2xl overflow-x-auto mb-2"
                style={{
                  backgroundColor: 'var(--background-primary)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 2px 8px var(--shadow-md)',
                }}
              >
                <code>{`npx create-next-app@latest ai-color-scheme`}</code>
              </pre>
              <pre
                className="p-4 rounded-2xl overflow-x-auto mb-2"
                style={{
                  backgroundColor: 'var(--background-primary)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 2px 8px var(--shadow-md)',
                }}
              >
                <code>{`cd ai-color-scheme`}</code>
              </pre>
              <pre
                className="p-4 rounded-2xl overflow-x-auto"
                style={{
                  backgroundColor: 'var(--background-primary)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 2px 8px var(--shadow-md)',
                }}
              >
                <code>{`npm run dev`}</code>
              </pre>
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
                建議選項（如果create-next-app 問你時）
              </h3>
              <ul className="list-none space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-center gap-2">
                  <span className="text-xl">⚙️</span>
                  <span className="text-lg">TypeScript：✅（建議）</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">⚙️</span>
                  <span className="text-lg">ESLint：✅</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">⚙️</span>
                  <span className="text-lg">Tailwind：✅</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">⚙️</span>
                  <span className="text-lg">App Router：✅</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">⚙️</span>
                  <span className="text-lg">src/ 目錄：可選（我傾向 ✅，結構更清晰）</span>
                </li>
              </ul>
            </div>

            <div
              className="p-6 rounded-3xl mb-6"
              style={{
                backgroundColor: 'var(--background-light-green)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                打開瀏覽器確認
              </h3>
              <p
                className="text-lg leading-relaxed mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background-primary)' }}>http://localhost:3000</code> 正常出現 Next.js 預設首頁
              </p>
            </div>

            {/* Image Placeholders */}
            <div className="space-y-6 mb-8">
              <div
                className="w-full h-64 md:h-80 rounded-3xl flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--background-light-purple)',
                  boxShadow: '0 4px 16px var(--shadow-md)',
                }}
              >
                <p style={{ color: 'var(--text-secondary)' }}>
                  [Image: 截圖 / alt="create-next-app 建立完成後的資料夾結構"]
                </p>
              </div>
              <div
                className="w-full h-64 md:h-80 rounded-3xl flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--background-light-yellow)',
                  boxShadow: '0 4px 16px var(--shadow-md)',
                }}
              >
                <p style={{ color: 'var(--text-secondary)' }}>
                  [Image: 截圖 / alt="瀏覽器顯示 Next.js 預設首頁（localhost:3000）"]
                </p>
              </div>
            </div>
          </div>
        </section>

        <LessonNavigation currentPage={2} totalPages={5} lessonNumber={2} />
      </div>
    </div>
  );
}
