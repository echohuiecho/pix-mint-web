'use client';

import Link from 'next/link';
import LessonNavigation from '../components/LessonNavigation';

export default function Lesson1Step2Part2() {
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
            👤🏢🏠 2｜角色與場景：誰在說？在哪裡？
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
              同一句「好攰」，上班族、學生、退休人士腦中的畫面往往完全不同。
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI 會嘗試在你的文字裡，抓出一些關於身份與場景的提示。
            </p>
          </div>

          {/* Image Placeholder - Generate with prompt: "A friendly illustration showing different people in different settings (office worker, student, retiree) with soft, rounded character designs. Each person in their own environment, styled in a playful, approachable way." */}
          <div
            className="w-full h-64 md:h-80 rounded-3xl mb-6 flex items-center justify-center"
            style={{
              backgroundColor: 'var(--background-light-green)',
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
            <p className="text-base font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              💡 例如：
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'var(--background-light-blue)' }}>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--color-purple)' }}>提到「開會」、「deadline」、「老闆」</strong> → 上班族的情境 💼
                </p>
              </div>
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'var(--background-light-purple)' }}>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--color-purple)' }}>提到「交功課」、「考試」、「上課」</strong> → 在校學生的情境 🎓
                </p>
              </div>
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'var(--background-light-orange)' }}>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--color-purple)' }}>提到「孫」、「飲茶」、「公園」</strong> → 比較接近退休生活 🌴
                </p>
              </div>
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
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              這種做法，和以前的
              <strong style={{ color: 'var(--color-purple)' }}> 實體與類別識別（Entity / Classification）任務</strong>有點相似：
              模型會嘗試找出：句子裡有哪些人、哪些地方、哪些物件。
            </p>
            <p
              className="text-sm leading-relaxed mt-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              🎨 在貼圖上，這會影響：
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1" style={{ color: 'var(--text-secondary)' }}>
              <li>角色長什麼樣子</li>
              <li>背景在什麼地方</li>
              <li>旁邊出現什麼東西</li>
            </ul>
          </div>
        </section>

        <LessonNavigation currentPage={4} totalPages={7} />
      </div>
    </div>
  );
}
