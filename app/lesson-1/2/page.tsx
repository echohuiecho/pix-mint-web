'use client';

import Link from 'next/link';
import LessonNavigation from '../../components/LessonNavigation';

export default function Lesson1Step1() {

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
            ✍️ 寫一句你今天的 Social Energy
          </h1>

          <div
            className="p-6 rounded-3xl mb-6"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              💭 找一個相對安靜的位置，想像你在跟一位很熟的朋友說話。
            </p>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              不是要寫得很「厲害」的 prompt，而是如實說出你今天的 Social Energy 狀態。
            </p>
          </div>

          {/* Image Placeholder - Generate with prompt: "A cozy illustration of someone sitting comfortably, typing on their phone or writing in a journal, with a relaxed atmosphere. Soft colors, rounded design, friendly and approachable style." */}
          <div
            className="w-full h-64 md:h-80 rounded-3xl mb-8 flex items-center justify-center"
            style={{
              backgroundColor: 'var(--background-light-blue)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <img
              src="https://slowai-learn.sgp1.cdn.digitaloceanspaces.com/lesson-1/lesson-1-writing-journal.jpg"
              alt="A cozy illustration of someone sitting comfortably, typing on their phone or writing in a journal, with a relaxed atmosphere. Soft colors, rounded design, friendly and approachable style."
              className="rounded-2xl h-full max-h-72 object-contain"
            />
          </div>

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            📝 練習：把心情打出來
          </h2>
          <div
            className="p-6 rounded-3xl mb-6"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-base leading-relaxed mb-4 text-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              你可以從這一句開始：
              <span className="font-semibold" style={{ color: 'var(--color-purple)' }}>
                「老實說，我今天其實是……」
              </span>
            </p>
            <p
              className="text-base leading-relaxed text-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              然後接下去，寫出屬於你自己的版本。
            </p>
          </div>
        </section>

        <LessonNavigation currentPage={2} totalPages={6} lessonNumber={1} />
      </div>
    </div>
  );
}
