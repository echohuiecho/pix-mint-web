'use client';

import Link from 'next/link';
import LessonNavigation from '../../components/LessonNavigation';

export default function Lesson2Step5() {
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
            Step 5｜建立 Git repo：把第一次可跑版本存起來
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
              目標
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              把「可跑的第一版」鎖定成一個起點。你之後要改、要加 feature、要回退，都會更安心。
            </p>
          </div>

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
              指令
            </h2>
            <pre
              className="p-4 rounded-2xl overflow-x-auto mb-4"
              style={{
                backgroundColor: 'var(--background-primary)',
                color: 'var(--text-primary)',
                boxShadow: '0 2px 8px var(--shadow-md)',
              }}
            >
              <code>{`git init
git add .
git commit -m "chore: init nextjs project and migrate canvas html"`}</code>
            </pre>
          </div>

          <div
            className="p-6 rounded-3xl mb-6"
            style={{
              backgroundColor: 'var(--background-light-blue)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              （可選）推到 GitHub
            </h2>
            <ol className="list-decimal list-inside space-y-3" style={{ color: 'var(--text-secondary)' }}>
              <li className="text-lg">在 GitHub 新建 repo（不要勾選 README／gitignore，避免衝突）</li>
              <li className="text-lg">按 GitHub 指示加 remote：</li>
            </ol>
            <pre
              className="p-4 rounded-2xl overflow-x-auto mt-4"
              style={{
                backgroundColor: 'var(--background-primary)',
                color: 'var(--text-primary)',
                boxShadow: '0 2px 8px var(--shadow-md)',
              }}
            >
              <code>{`git remote add origin <your_repo_url>
git branch -M main
git push -u origin main`}</code>
            </pre>
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
                [Image: 截圖 / alt="Terminal 顯示 git commit 成功訊息"]
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
                [Image: 截圖 / alt="GitHub repo 首次 push 完成，看到檔案列表"]
              </p>
            </div>
          </div>
        </section>

        <LessonNavigation currentPage={4} totalPages={5} lessonNumber={2} />
      </div>
    </div>
  );
}
