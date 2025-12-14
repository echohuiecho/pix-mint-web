'use client';

import Link from 'next/link';
import LessonNavigation from '../components/LessonNavigation';

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
            ✍️ Step 1｜寫一句你今天的 Social Energy
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
              💭 找一個相對安靜的位置，想像你在 WhatsApp 跟一位很熟的朋友說話。
            </p>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              不是交功課，也不是要「寫得很厲害」，而是如實說出你今天的狀態。
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
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              [圖片位置 - 生成提示見註釋]
            </p>
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
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              你可以從這一句開始：
              <span className="font-semibold" style={{ color: 'var(--color-purple)' }}>
                「老實說，我今天其實是……」
              </span>
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              然後接下去，寫出屬於你自己的版本。
            </p>
          </div>

          {/* 建議示例 */}
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            💡 不同身份的人可以這樣寫：
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <h4
                className="text-xl font-bold mb-3 flex items-center gap-2"
                style={{ color: 'var(--color-purple)' }}
              >
                💼 如果你是上班族，可以這樣寫：
              </h4>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>「今天 social energy 用光了，只想黏在辦公椅上發呆。」</li>
                <li>「開會開到腦裡只剩 1% 電量。」</li>
              </ul>
            </div>

            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <h4
                className="text-xl font-bold mb-3 flex items-center gap-2"
                style={{ color: 'var(--color-purple)' }}
              >
                🎓 如果你是學生：
              </h4>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>「溫書溫到很想直接變成被窩裡的一團。」</li>
                <li>「看到筆記就覺得 energy 直接歸零。」</li>
              </ul>
            </div>

            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <h4
                className="text-xl font-bold mb-3 flex items-center gap-2"
                style={{ color: 'var(--color-purple)' }}
              >
                🌴 如果你已經退休：
              </h4>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>「雖然退休，但今天完全不想 social，只想自己慢慢過。」</li>
                <li>「孫很可愛，但今天真的有點招架不住。」</li>
              </ul>
            </div>

            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <h4
                className="text-xl font-bold mb-3 flex items-center gap-2"
                style={{ color: 'var(--color-purple)' }}
              >
                ❤️ 如果你是照顧者：
              </h4>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>「一整天在照顧家人，現在只剩『想靜一靜』的力氣。」</li>
              </ul>
            </div>
          </div>

          <div
            className="p-4 rounded-2xl"
            style={{
              backgroundColor: 'var(--background-light-yellow)',
              boxShadow: '0 2px 8px var(--shadow)',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <strong>💡 提示：</strong>不需要加入「請幫我畫一張圖」這類說明，就像平常傳訊息一樣，說出你的心情就可以了。
            </p>
          </div>
        </section>

        <LessonNavigation currentPage={2} totalPages={7} />
      </div>
    </div>
  );
}
