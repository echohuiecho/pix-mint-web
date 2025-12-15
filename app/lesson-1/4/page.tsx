'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import SubscribeModal from '../../components/SubscribeModal';
import LessonNavigation from '../components/LessonNavigation';

export default function Lesson1StickerGenerator() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [socialEnergyText, setSocialEnergyText] = useState<string>('');
  const [selectedExample, setSelectedExample] = useState<'office' | 'student' | 'general' | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImageBase64, setGeneratedImageBase64] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);
  const [isCheckingStatus, setIsCheckingStatus] = useState<boolean>(true);

  const examples = {
    office: {
      title: '💼 上班族',
      items: [
        '「今天 social energy 用光了，只想黏在辦公椅上發呆。」',
        '「開會開到腦裡只剩 1% 電量。」',
      ],
    },
    student: {
      title: '🎓 學生',
      items: [
        '「溫書溫到很想直接變成被窩裡的一團。」',
        '「看到筆記就覺得 energy 直接歸零。」',
      ],
    },
    general: {
      title: '🌴 其他',
      items: [
        '「今天完全不想 social，只想自己慢慢過。」',
        '「今天真的有點招架不住。」',
      ],
    },
  };

  // Check generation status on mount
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('/api/check-generation-status');
        const data = await response.json();
        if (data.hasGenerated) {
          setHasGenerated(true);
        }
      } catch (err) {
        console.error('Error checking generation status:', err);
      } finally {
        setIsCheckingStatus(false);
      }
    };

    checkStatus();
  }, []);

  const handleGenerateSticker = async () => {
    if (!socialEnergyText.trim()) {
      setError('請輸入你的 Social Energy 描述');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedImageBase64(null);

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          socialEnergyText: socialEnergyText.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If 403, user has already generated
        if (response.status === 403) {
          setHasGenerated(true);
          setError(data.error || '您已經生成過圖片了');
        } else {
          throw new Error(data.error || '生成圖片時發生錯誤');
        }
        return;
      }

      if (data.success && data.imageBase64) {
        setGeneratedImageBase64(data.imageBase64);
        setHasGenerated(true); // Mark as generated after success
      } else {
        throw new Error('未能取得生成的圖片');
      }
    } catch (err) {
      console.error('Error generating image:', err);
      setError(err instanceof Error ? err.message : '生成圖片時發生錯誤');
    } finally {
      setIsGenerating(false);
    }
  };

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
            🎨 生成你的 Social Energy 貼圖
          </h1>

          <div
            className="p-6 rounded-3xl mb-6 text-xl"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-xl leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              現在，讓我們把前面學到的整合起來：用你寫的 Social Energy 句子，讓 AI 幫你生成一張專屬貼圖！
            </p>
            <p
              className="text-xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              還記得那三位「AI 小工人」嗎？它們會一起合作，把文字轉換成圖像。
            </p>
          </div>

          {/* Sticker Generation Form */}
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
              📝 輸入你的 Social Energy
            </h2>

            {/* Example category selector */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                選擇範例類別：
              </label>
              <div className="flex flex-wrap gap-3 mb-4">
                <button
                  onClick={() => {
                    setSelectedExample('office');
                    setSocialEnergyText(examples.office.items[0]);
                  }}
                  disabled={hasGenerated}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    selectedExample === 'office'
                      ? 'text-white'
                      : 'text-gray-600'
                  } ${hasGenerated ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{
                    background: selectedExample === 'office'
                      ? 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)'
                      : 'var(--background-primary)',
                    boxShadow: selectedExample === 'office'
                      ? '0 4px 12px rgba(140, 80, 200, 0.25)'
                      : '0 2px 8px var(--shadow-md)',
                  }}
                >
                  💼 上班族
                </button>
                <button
                  onClick={() => {
                    setSelectedExample('student');
                    setSocialEnergyText(examples.student.items[0]);
                  }}
                  disabled={hasGenerated}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    selectedExample === 'student'
                      ? 'text-white'
                      : 'text-gray-600'
                  } ${hasGenerated ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{
                    background: selectedExample === 'student'
                      ? 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)'
                      : 'var(--background-primary)',
                    boxShadow: selectedExample === 'student'
                      ? '0 4px 12px rgba(140, 80, 200, 0.25)'
                      : '0 2px 8px var(--shadow-md)',
                  }}
                >
                  🎓 學生
                </button>
                <button
                  onClick={() => {
                    setSelectedExample('general');
                    setSocialEnergyText(examples.general.items[0]);
                  }}
                  disabled={hasGenerated}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    selectedExample === 'general'
                      ? 'text-white'
                      : 'text-gray-600'
                  } ${hasGenerated ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{
                    background: selectedExample === 'general'
                      ? 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)'
                      : 'var(--background-primary)',
                    boxShadow: selectedExample === 'general'
                      ? '0 4px 12px rgba(140, 80, 200, 0.25)'
                      : '0 2px 8px var(--shadow-md)',
                  }}
                >
                  🌴 其他
                </button>
              </div>

              {/* Quick-fill buttons for selected category */}
              {selectedExample && (
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                    快速選擇句子：
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {examples[selectedExample].items.map((item) => (
                      <button
                        key={item}
                        onClick={() => setSocialEnergyText(item)}
                        disabled={hasGenerated}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                          hasGenerated ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                        }`}
                        style={{
                          backgroundColor: socialEnergyText === item
                            ? 'var(--background-light-purple)'
                            : 'var(--background-primary)',
                          color: socialEnergyText === item
                            ? 'var(--color-purple)'
                            : 'var(--text-secondary)',
                          boxShadow: '0 2px 8px var(--shadow-md)',
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                你的 Social Energy 句子（可修改）：
              </label>
              <textarea
                value={socialEnergyText}
                onChange={(e) => {
                  setSocialEnergyText(e.target.value);
                  setSelectedExample(null);
                }}
                disabled={hasGenerated}
                rows={3}
                className={`w-full rounded-2xl p-4 outline-none ${
                  hasGenerated ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                style={{
                  backgroundColor: 'var(--background-primary)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 2px 8px var(--shadow-md)',
                }}
                placeholder="例如：老實說，我今天其實是……"
              />
            </div>

            {hasGenerated && (
              <div
                className="p-4 rounded-2xl mb-4"
                style={{
                  backgroundColor: 'var(--background-light-purple)',
                  borderLeft: '4px solid var(--color-purple)',
                }}
              >
                <p className="text-base font-semibold" style={{ color: 'var(--color-purple)' }}>
                  ℹ️ 每位用戶只能生成一次貼圖
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  您已經使用過生成功能了
                </p>
              </div>
            )}

            {error && !hasGenerated && (
              <div
                className="p-4 rounded-2xl mb-4"
                style={{
                  backgroundColor: 'var(--background-darker)',
                  color: 'var(--color-orange)',
                }}
              >
                ⚠️ {error}
              </div>
            )}

            <button
              onClick={handleGenerateSticker}
              disabled={isGenerating || hasGenerated || isCheckingStatus}
              className="w-full px-6 py-3 rounded-2xl font-semibold text-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: hasGenerated
                  ? 'var(--background-secondary)'
                  : 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
                color: 'white',
                boxShadow: hasGenerated
                  ? '0 2px 8px var(--shadow-md)'
                  : '0 4px 12px rgba(140, 80, 200, 0.25)',
              }}
            >
              {isCheckingStatus
                ? '⏳ 檢查中...'
                : isGenerating
                ? '🎨 生成中...'
                : hasGenerated
                ? '✅ 已生成（無法再次生成）'
                : '✨ 生成貼圖'}
            </button>
          </div>

          {/* Generated Image Display */}
          {generatedImageBase64 && (
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
                🎉 你的 Social Energy 貼圖
              </h2>
              <div className="flex flex-col items-center gap-4">
                <img
                  src={`data:image/png;base64,${generatedImageBase64}`}
                  alt="Generated Social Energy sticker"
                  className="rounded-3xl max-w-full h-auto"
                  style={{
                    maxHeight: '512px',
                    boxShadow: '0 8px 32px var(--shadow-md)',
                  }}
                />
                <button
                  onClick={() => {
                    // Convert base64 to blob and download
                    const byteCharacters = atob(generatedImageBase64);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                      byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    const blob = new Blob([byteArray], { type: 'image/png' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'social-energy-sticker.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                  }}
                  className="px-6 py-2.5 rounded-2xl font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'var(--background-primary)',
                    color: 'var(--color-purple)',
                    boxShadow: '0 2px 8px var(--shadow-md)',
                  }}
                >
                  📥 下載貼圖
                </button>
              </div>
            </div>
          )}

          {isGenerating && (
            <div
              className="p-6 rounded-3xl mb-6 text-center"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <div className="text-4xl mb-4">🎨</div>
              <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
                AI 小工人們正在努力生成你的貼圖...
              </p>
              <p className="text-sm mt-2" style={{ color: 'var(--text-tertiary)' }}>
                這可能需要幾秒鐘時間
              </p>
            </div>
          )}
        </section>

        <LessonNavigation currentPage={4} totalPages={7} />
      </div>
    </div>
  );
}
