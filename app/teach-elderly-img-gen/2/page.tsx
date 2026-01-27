'use client';

import { useState } from 'react';
import Link from 'next/link';
import LessonNavigation from '../../components/LessonNavigation';

export default function TeachElderlyImgGenPage2() {
  const [copied, setCopied] = useState(false);

  const prompt = `主角是一位慈祥的新年長輩，臉上掛著溫暖的微笑，眼角皺著，皮膚表現出歲月的痕跡，頭髮灰白，戴著一副溫馨的眼鏡。

穿著一件傳統的中國長袍，拿著寫著新年大吉的揮春，背景是一個簡潔乾淨的客廳，陽光從窗戶照進來，照亮了整個房間，營造出一個溫暖和諧的氛圍，整個場景充滿了新年喜慶和溫暖的氣氛，構圖為半身人像，

主角的面部表情自然，五官清楚，手部正常，手繪線條自然，柔和暖色調，水彩質感背景，下午陽光，生活感十足，電影分鏡感

風格：溫暖日系手繪動畫，吉卜力風格。`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
            生成圖片體驗 #2
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
              單人照
            </h2>
            <div
              className="p-4 rounded-2xl mb-4 font-mono text-lg whitespace-pre-wrap"
              style={{
                backgroundColor: 'var(--background-darker)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              {prompt}
            </div>
            <button
              onClick={handleCopy}
              className="w-full px-6 py-3 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{
                background: copied
                  ? 'linear-gradient(90deg, #10b981 0%, #059669 100%)'
                  : 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
                color: 'white',
                boxShadow: '0 4px 12px rgba(140, 80, 200, 0.25)',
              }}
            >
              {copied ? (
                <>
                  <span>✓</span>
                  <span>已複製！</span>
                </>
              ) : (
                <>
                  <span>📋</span>
                  <span>複製提示詞</span>
                </>
              )}
            </button>
          </div>
        </section>

        <LessonNavigation currentPage={2} totalPages={4} lessonNumber={0} customPath="/teach-elderly-img-gen" />
      </div>
    </div>
  );
}
