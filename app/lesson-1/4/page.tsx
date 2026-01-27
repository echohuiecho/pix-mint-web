'use client';

import Link from 'next/link';
import LessonNavigation from '../../components/LessonNavigation';

export default function Lesson1Step3() {
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
            🤖 從文字到貼圖：幾個 AI「小工人」的合作
          </h1>

          <div
            className="p-6  rounded-3xl mb-6 text-xl"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-xl leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              一張看似簡單的 Social Energy 貼圖，背後其實經過了不同能力的合作。
            </p>
            <p
              className="text-xl leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              你可以把它想像成幾位「AI 小工人」一起幫忙：
            </p>
          </div>

          {/* Image Placeholder - Generate with prompt: "Three friendly, playful AI worker characters collaborating together, each with a different role (emotion reader, scene analyzer, image designer). Soft, rounded, 3D felt-like style with googly eyes, working together harmoniously." */}
          <div
            className="w-full h-64 md:h-80 rounded-3xl mb-8 flex items-center justify-center"
            style={{
              backgroundColor: 'var(--background-light-green)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <img
              src="https://slowai-learn.sgp1.cdn.digitaloceanspaces.com/lesson-1/lesson-1-3-AI.jpg"
              alt="Three friendly, playful AI worker characters collaborating together, each with a different role (emotion reader, scene analyzer, image designer). Soft, rounded, 3D felt-like style with googly eyes, working together harmoniously."
              className="rounded-2xl h-full max-h-72 object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <div className="text-4xl mb-3">😊</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-purple)' }}
              >
                情緒小工人
              </h3>
              <p
                className="text-xl leading-relaxed mb-3"
                style={{ color: 'var(--text-secondary)' }}
              >
                負責讀你句子裡的情緒線索：
              </p>
              <ul className="list-disc list-inside space-y-1 text-xl" style={{ color: 'var(--text-secondary)' }}>
                <li>這是一種興奮？</li>
                <li>還是「用光 energy」的疲累？</li>
              </ul>
            </div>

            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <div className="text-4xl mb-3">👤</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-purple)' }}
              >
                角色與場景小工人
              </h3>
              <p
                className="text-xl leading-relaxed mb-3"
                style={{ color: 'var(--text-secondary)' }}
              >
                留意你提到的身份與場景：
              </p>
              <ul className="list-disc list-inside space-y-1 text-xl" style={{ color: 'var(--text-secondary)' }}>
                <li>上班、讀書、退休、照顧者…</li>
                <li>在辦公室、課室、家裡、地鐵…</li>
              </ul>
            </div>

            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <div className="text-4xl mb-3">🎨</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-purple)' }}
              >
                畫面設計小工人
              </h3>
              <p
                className="text-xl leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                把前面得到的訊息整理成一段畫面說明，再交給圖像生成的部分，讓貼圖真正「長出來」。
              </p>
            </div>
          </div>

          <div
            className="p-4 rounded-2xl"
            style={{
              backgroundColor: 'var(--background-darker)',
              boxShadow: '0 2px 8px var(--shadow)',
            }}
          >
            <p
              className="text-xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              💡 這些工作可以由不同的 AI 模型分開處理，而今天，大型語言模型把很多能力整合在同一個大腦裡，再加上圖像模型，才成為你現在看到的體驗。
            </p>
          </div>
        </section>

        <LessonNavigation currentPage={4} totalPages={5} lessonNumber={1} />
      </div>
    </div>
  );
}
