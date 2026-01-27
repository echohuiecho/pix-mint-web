'use client';

import { useState } from 'react';
import Link from 'next/link';
import LessonNavigation from '../../components/LessonNavigation';

export default function TeachElderlyImgGenPage1() {
  const [copied, setCopied] = useState(false);

  const prompt = `場景是香港城市街景：密集唐樓與招牌、電車／小巴元素、街角店舖與路牌、行人天橋或窄街巷

細節豐富但整體乾淨有秩序。

構圖像電影分鏡，透視自然，空氣感強，遠景有薄霧層次。不要文字、不要水印、不要過度銳化、不要寫實照片感。

風格：吉卜力風`;

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
            生成圖片體驗 #1
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
              吉卜力風
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

        <LessonNavigation currentPage={1} totalPages={4} lessonNumber={0} customPath="/teach-elderly-img-gen" />
      </div>
    </div>
  );
}
