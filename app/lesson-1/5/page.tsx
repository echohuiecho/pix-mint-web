'use client';

import Link from 'next/link';
import LessonNavigation from '../components/LessonNavigation';

export default function Lesson1Step2Part3() {
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
            🧩 3｜關鍵詞拆解：把話變成「AI 聽得懂」的描述
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
              對模型來說，你那一句完整的句子，並不會被當成「一整塊」來理解。
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              它會先拆成一個個較小的單位（可以想像成「字粒」），例如：
            </p>
          </div>

          {/* Image Placeholder - Generate with prompt: "An illustration showing words being broken down into smaller pieces, with colorful word tags or puzzle pieces connecting together. Playful design with soft shapes, showing how AI processes language." */}
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
            <div className="flex flex-wrap gap-2 mb-4">
              {['今日', 'social', 'energy', '用晒', '黏在', '沙發', '不動'].map((word) => (
                <span
                  key={word}
                  className="px-3 py-1 rounded-xl text-sm font-medium"
                  style={{
                    backgroundColor: 'var(--background-darker)',
                    color: 'var(--text-primary)',
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
              在模型的內部世界裡：
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>「用晒」、「攰」、「不動」會比較靠近「低能量」、「疲憊」這一群字；</li>
              <li>「沙發」、「床」、「被窩」會比較靠近「休息」、「放鬆」這一群字。</li>
            </ul>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              當模型嘗試幫你生成貼圖時，其實是在內心裡拼湊出一段大概的畫面描述，例如：
            </p>
            <div
              className="p-4 rounded-2xl my-4 border-l-4"
              style={{
                backgroundColor: 'var(--background-light-blue)',
                borderColor: 'var(--color-purple)',
                boxShadow: '0 2px 8px var(--shadow)',
              }}
            >
              <p
                className="text-base italic leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                💭 「一個很累、energy 用盡的人，軟軟地黏在沙發上，表情無力，整體感覺是一個低能量但安全的空間。」
              </p>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-tertiary)' }}
            >
              💡 這段描述，不一定會完整寫出來，但會成為圖像模型作畫時的重要參考。
            </p>
          </div>
        </section>

        <LessonNavigation currentPage={5} totalPages={7} />
      </div>
    </div>
  );
}
