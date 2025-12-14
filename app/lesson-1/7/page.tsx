'use client';

import Link from 'next/link';
import { useState } from 'react';
import SubscribeModal from '../../components/SubscribeModal';
import LessonNavigation from '../components/LessonNavigation';

export default function Lesson1Review() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-primary)' }}>
      <SubscribeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

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
            🎉 回顧：你在這一課，其實已經做了什麼？
          </h1>

          {/* Image Placeholder - Generate with prompt: "A celebratory illustration showing someone completing a learning journey, with checkmarks, stars, and a sense of achievement. Warm, encouraging colors, playful design." */}
          <div
            className="w-full h-64 md:h-80 rounded-3xl mb-8 flex items-center justify-center"
            style={{
              backgroundColor: 'var(--background-light-yellow)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              [圖片位置 - 生成提示見註釋]
            </p>
          </div>

          <div
            className="p-6 rounded-3xl mb-6"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              ✨ 在這一課，你已經：
            </p>
            <ul className="list-none space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span style={{ color: 'var(--text-secondary)' }}>寫出一句真正屬於自己的 Social Energy 描述</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span style={{ color: 'var(--text-secondary)' }}>用這一句話，讓模型嘗試捕捉你的情緒與角色</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span style={{ color: 'var(--text-secondary)' }}>看見模型如何把這些線索整理成可以畫圖的說明</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <span style={{ color: 'var(--text-secondary)' }}>完成了屬於自己的第一張（或一組） Social Energy 貼圖雛形</span>
              </li>
            </ul>
            <p
              className="text-base leading-relaxed mt-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              即使你還未能用專有名詞解釋整個流程，你已經多了一個很重要的感覺：
            </p>
            <div
              className="p-4 rounded-2xl mt-4 border-l-4"
              style={{
                backgroundColor: 'var(--background-light-purple)',
                borderColor: 'var(--color-purple)',
                boxShadow: '0 2px 8px var(--shadow)',
              }}
            >
              <p
                className="text-base font-semibold"
                style={{ color: 'var(--color-purple)' }}
              >
                📌 原來 AI 並不是「魔法」，而是一連串有步驟的處理與合作。
              </p>
            </div>
          </div>

          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            🚀 下一步：我們會走到哪裡？
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
              在之後的課程裡，我們會：
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>用「圖對圖（Image-to-Image）」看看，模型如何在保留姿勢的情況下，替你變換風格；</li>
              <li>說說為什麼有時候貼圖會「畫錯樣」，例如數量畫錯、表情有點奇怪，那並不是你不會用，而是模型本身的限制；</li>
              <li>再從這些例子，回到「一個模型裡，同時訓練多種任務」的概念。</li>
            </ul>
          </div>

          <div
            className="p-6 rounded-3xl"
            style={{
              background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
              boxShadow: '0 8px 32px rgba(140, 80, 200, 0.25)',
            }}
          >
            <p
              className="text-lg leading-relaxed mb-4 text-white"
            >
              📧 如果你希望在第二課、第三課開放時，以及 slowAI App 正式上架時，第一時間收到通知，可以在下方留下你的電郵。
            </p>
            <p
              className="text-base leading-relaxed mb-6 text-white/90"
            >
              我會在你準備好的時候，和你一起慢慢走向下一步。🌿
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
              style={{
                backgroundColor: 'white',
                color: 'var(--color-purple)',
                boxShadow: '0 4px 16px rgba(255, 255, 255, 0.3)',
              }}
            >
              訂閱通知
            </button>
          </div>
        </section>

        <LessonNavigation currentPage={7} totalPages={7} />
      </div>
    </div>
  );
}
