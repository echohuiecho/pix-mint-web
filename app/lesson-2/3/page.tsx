'use client';

import Link from 'next/link';
import LessonNavigation from '../../components/LessonNavigation';

export default function Lesson2Step3And4() {
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
            Step 3-4｜用 Cursor 把 HTML 變成 Next.js 首頁 + 讓它「先跑起來」
          </h1>

          {/* Part 1: Cursor Migration */}
          <div className="mb-12">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Part 1：用 Cursor 把 HTML 變成 Next.js 首頁
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
                目標
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                不要手動逐行搬。我們用 Cursor 的 Agent 幫你做「第一版移植」：把 HTML 內容放到 Next.js 的 <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background-primary)' }}>Home page</code>，並把 <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background-primary)' }}>&lt;style&gt;</code> 與 <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background-primary)' }}>&lt;script&gt;</code> 處理成「在 Next.js 可運行」的形式。
              </p>
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
                你要打開的檔案（Next.js）
              </h3>
              <p
                className="text-lg leading-relaxed mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                （App Router 情況）
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li className="text-lg"><code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background-primary)' }}>app/page.tsx</code>（或 <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background-primary)' }}>src/app/page.tsx</code>）</li>
              </ul>
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
                Cursor 的建議流程
              </h3>
              <ol className="list-decimal list-inside space-y-3" style={{ color: 'var(--text-secondary)' }}>
                <li className="text-lg">打開 Cursor</li>
                <li className="text-lg">打開你的 Next.js 專案資料夾 <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background-primary)' }}>canvas-to-next</code></li>
                <li className="text-lg">去 <strong>Agent</strong> 分頁</li>
                <li className="text-lg"><strong>Attach</strong> 你的 <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background-primary)' }}>canvas.html</code>（或直接貼上內容）</li>
                <li className="text-lg">請 Agent 幫你把 HTML 移植到 <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background-primary)' }}>app/page.tsx</code></li>
              </ol>
            </div>

            <div
              className="p-6 rounded-3xl mb-6"
              style={{
                backgroundColor: 'var(--background-light-purple)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                你可以直接用的 Agent 指令（貼上就用）
              </h3>
              <pre
                className="p-4 rounded-2xl overflow-x-auto text-sm"
                style={{
                  backgroundColor: 'var(--background-primary)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 2px 8px var(--shadow-md)',
                  whiteSpace: 'pre-wrap',
                }}
              >
                <code>{`我有一份從 Gemini Canvas 匯出的完整 HTML（見附件 canvas.html）。
請把它移植到 Next.js App Router 的首頁：app/page.tsx。
要求：

1. 保留原本畫面與互動行為
2. 將 HTML body 內容轉成 React JSX
3. 將 <style> 整理到合適位置（可先用 <style jsx global> 或 app/globals.css）
4. 將 <script> 的邏輯改成 React/Next.js 可用方式（例如 useEffect 綁事件、或改成 component state）
5. 若涉及 document.getElementById，請盡量改成 React ref / state（但第一版可先讓它跑得起來）
6. 完成後告訴我你改了哪些檔案，以及我如何測試`}</code>
              </pre>
            </div>

            {/* Image Placeholders */}
            <div className="space-y-6 mb-8">
              <div
                className="w-full h-64 md:h-80 rounded-3xl flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--background-light-blue)',
                  boxShadow: '0 4px 16px var(--shadow-md)',
                }}
              >
                <p style={{ color: 'var(--text-secondary)' }}>
                  [Image: 截圖 / alt="Cursor Agent 面板，已附加 canvas.html，準備下指令"]
                </p>
              </div>
              <div
                className="w-full h-64 md:h-80 rounded-3xl flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--background-light-green)',
                  boxShadow: '0 4px 16px var(--shadow-md)',
                }}
              >
                <p style={{ color: 'var(--text-secondary)' }}>
                  [Image: 截圖 / alt="Cursor 生成的 app/page.tsx，已出現 JSX 結構"]
                </p>
              </div>
            </div>
          </div>

          {/* Part 2: Make it Run */}
          <div className="mb-12">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Part 2：讓它「先跑起來」，再慢慢整理
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
                目標
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                第一課不追求完美架構，我們只做一件事：<strong>能跑</strong>。
              </p>
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
                測試
              </h3>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                在專案根目錄：
              </p>
              <pre
                className="p-4 rounded-2xl overflow-x-auto"
                style={{
                  backgroundColor: 'var(--background-primary)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 2px 8px var(--shadow-md)',
                }}
              >
                <code>npm run dev</code>
              </pre>
              <p
                className="text-lg leading-relaxed mt-4 mb-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                檢查三件事：
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li className="text-lg">畫面是否跟 Canvas 版本相近</li>
                <li className="text-lg">基本互動是否可用（按鈕、輸入、狀態更新）</li>
                <li className="text-lg">Console 有沒有 error（先記下，不一定要立刻解）</li>
              </ul>
            </div>

            {/* Image Placeholders */}
            <div className="space-y-6 mb-8">
              <div
                className="w-full h-64 md:h-80 rounded-3xl flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--background-light-yellow)',
                  boxShadow: '0 4px 16px var(--shadow-md)',
                }}
              >
                <p style={{ color: 'var(--text-secondary)' }}>
                  [Image: 截圖 / alt="Next.js 頁面已呈現與 Canvas 相似的 UI"]
                </p>
              </div>
              <div
                className="w-full h-64 md:h-80 rounded-3xl flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--background-light-orange)',
                  boxShadow: '0 4px 16px var(--shadow-md)',
                }}
              >
                <p style={{ color: 'var(--text-secondary)' }}>
                  [Image: 截圖 / alt="瀏覽器 console 顯示 0 error 或可接受的 warning"]
                </p>
              </div>
            </div>
          </div>
        </section>

        <LessonNavigation currentPage={3} totalPages={5} lessonNumber={2} />
      </div>
    </div>
  );
}
