'use client';

import Link from 'next/link';
import LessonNavigation from '../components/LessonNavigation';

export default function Lesson1Step2Part1() {
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
            🎭 Step 2｜AI 眼中，你這一句話長什麼樣？
          </h1>

          <div
            className="p-6 rounded-3xl mb-6"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              當你打出一段文字，例如：
              <span className="font-semibold" style={{ color: 'var(--color-purple)' }}>
                「今日 social energy 用晒，只想黏在沙發上不動。」
              </span>
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI 並不會像人一樣，真的「感受到」你的疲累，它做的，是把這一句話拆成很多細小的線索，再根據這些線索去估計：你大概在說怎樣的一個狀態。
            </p>
          </div>

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            😊😴 1｜情緒線索：這句話的情緒在偏哪一邊？
          </h2>

          {/* Image Placeholder - Generate with prompt: "An illustration showing AI analyzing emotions from text, with colorful word clouds or emotion indicators. Playful design with soft shapes, showing how different words connect to different feelings." */}
          <div
            className="w-full h-64 md:h-80 rounded-3xl mb-6 flex items-center justify-center"
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
            className="p-6 rounded-3xl mb-4"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              在「今日 social energy 用晒，只想黏在沙發上不動。」這一句裡，AI 會特別留意到一些字眼，例如：
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['用晒', '不動', '黏在沙發上'].map((word) => (
                <span
                  key={word}
                  className="px-4 py-2 rounded-xl text-base font-semibold"
                  style={{
                    backgroundColor: 'var(--background-light-orange)',
                    color: 'var(--color-orange)',
                    boxShadow: '0 2px 4px var(--shadow)',
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              這些用詞都指向一種狀態：
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>很累</li>
              <li>能量很低</li>
              <li>想暫時退出互動</li>
            </ul>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              這一部分，其實就和比較早期的
              <strong style={{ color: 'var(--color-purple)' }}> 情緒分析（Sentiment Analysis）模型</strong>有點相似：
              它會判斷一句話是偏正面、負面，還是疲累、焦慮等。
            </p>
          </div>

          <div
            className="p-4 rounded-2xl"
            style={{
              backgroundColor: 'var(--background-darker)',
              boxShadow: '0 2px 8px var(--shadow)',
            }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              💡 今天的大型語言模型，把這種「讀情緒」的能力一併學在同一個大腦裡。
            </p>
            <p
              className="text-sm leading-relaxed mt-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              你不需要記住名稱，只要知道：當你說「用晒」、「好攰」、「不想再 social」，模型會把它們當作「低能量、需要退後」的信號。
            </p>
          </div>
        </section>

        <LessonNavigation currentPage={3} totalPages={7} />
      </div>
    </div>
  );
}
