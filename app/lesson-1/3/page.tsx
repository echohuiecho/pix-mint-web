'use client';

import { useState } from 'react';
import Link from 'next/link';
import LessonNavigation from '../components/LessonNavigation';

export default function Lesson1Step2Part1() {
  const [selectedExample, setSelectedExample] = useState<'office' | 'student' | 'general'>('office');
  const [userSentence, setUserSentence] = useState<string>('「今天 social energy 用光了，只想黏在辦公椅上發呆。」');
  const [hasSent, setHasSent] = useState(false);

  const examples = {
    office: {
      title: '💼 如果你是上班族，可以這樣寫：',
      items: [
        '「今天 social energy 用光了，只想黏在辦公椅上發呆。」',
        '「開會開到腦裡只剩 1% 電量。」',
      ],
    },
    student: {
      title: '🎓 如果你是學生：',
      items: [
        '「溫書溫到很想直接變成被窩裡的一團。」',
        '「看到筆記就覺得 energy 直接歸零。」',
      ],
    },
    general: {
      title: '🌴 如果你：',
      items: [
        '「今天完全不想 social，只想自己慢慢過。」',
        '「今天真的有點招架不住。」',
      ],
    },
  };

  const directTemplate = {
    buildPrompt: (text: string) =>
      `Direct sentiment analysis.\nReturn EXACTLY one sentence.\nOutput format: Sentiment=<positive|neutral|negative>, Intensity=<low|medium|high>, Confidence=<low|medium|high>, KeyEmotion=<one word>.\nText: ${text}`,
  } as const;

  const promptText = directTemplate.buildPrompt((userSentence ?? '').trim() || '[your sentence here]');

  const hardcodedSentimentResponse = (text: string) => {
    const t = (text ?? '').trim();
    if (!t) {
      return 'Sentiment=neutral, Intensity=low, Confidence=low, KeyEmotion=unsure.';
    }

    // Exact matches for the built-in examples (fixed responses)
    if (t === examples.office.items[0]) {
      return 'Sentiment=negative, Intensity=high, Confidence=high, KeyEmotion=exhaustion.';
    }
    if (t === examples.office.items[1]) {
      return 'Sentiment=negative, Intensity=high, Confidence=medium, KeyEmotion=overload.';
    }
    if (t === examples.student.items[0]) {
      return 'Sentiment=negative, Intensity=high, Confidence=high, KeyEmotion=burnout.';
    }
    if (t === examples.student.items[1]) {
      return 'Sentiment=negative, Intensity=high, Confidence=high, KeyEmotion=demotivation.';
    }
    if (t === examples.general.items[0]) {
      return 'Sentiment=negative, Intensity=medium, Confidence=medium, KeyEmotion=overload.';
    }
    if (t === examples.general.items[1]) {
      return 'Sentiment=negative, Intensity=high, Confidence=medium, KeyEmotion=overwhelm.';
    }

    // Simple keyword-based routing to different fixed outputs (still hard-coded)
    const n = t.replace(/[「」"]/g, '').toLowerCase();

    if (/(開心|期待|興奮|很棒|舒服|放鬆|滿足)/.test(n)) {
      return 'Sentiment=positive, Intensity=medium, Confidence=medium, KeyEmotion=contentment.';
    }
    if (/(累|疲|用光|歸零|沒電|1%|耗盡|倦|burnout)/.test(n)) {
      return 'Sentiment=negative, Intensity=medium, Confidence=medium, KeyEmotion=fatigue.';
    }
    if (/(焦慮|緊張|擔心|怕|壓力)/.test(n)) {
      return 'Sentiment=negative, Intensity=medium, Confidence=medium, KeyEmotion=anxiety.';
    }
    if (/(生氣|火大|煩|惱|怒)/.test(n)) {
      return 'Sentiment=negative, Intensity=medium, Confidence=medium, KeyEmotion=frustration.';
    }
    if (/(無聊|沒差|普通|還好|一般|ok)/.test(n)) {
      return 'Sentiment=neutral, Intensity=low, Confidence=medium, KeyEmotion=indifferent.';
    }
    if (/(想自己|不想社交|不想social|躲|被窩)/.test(n)) {
      return 'Sentiment=negative, Intensity=medium, Confidence=low, KeyEmotion=withdrawal.';
    }

    return 'Sentiment=neutral, Intensity=low, Confidence=low, KeyEmotion=unclear.';
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
            🎭 AI 眼中，你這一句話長什麼樣？
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
              當你打出一段文字，例如：
              <span className="font-semibold" style={{ color: 'var(--color-purple)' }}>
                「今日 social energy 用晒，只想黏在沙發上不動。」
              </span>
            </p>
            <p
              className="text-xl leading-relaxed mb-4"
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
            <img
              src="https://slowai-learn.sgp1.cdn.digitaloceanspaces.com/lesson-1/lesson-1-sentiment-analysis.jpg"
              alt="An illustration showing AI analyzing emotions from text, with colorful word clouds or emotion indicators. Playful design with soft shapes, showing how different words connect to different feelings."
              className="rounded-2xl h-full max-h-72 object-contain"
            />
          </div>

                    {/* Example selector + Prompt template demo */}
                    <div
            className="p-6 rounded-3xl mb-6"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              💡 選一個範例，使用情緒分析模型（模擬回覆）
            </h3>

            {/* Example selector pills */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                選擇範例：
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setSelectedExample('office');
                    setUserSentence(examples.office.items[0]);
                    setHasSent(false);
                  }}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    selectedExample === 'office'
                      ? 'text-white'
                      : 'text-gray-600'
                  }`}
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
                    setUserSentence(examples.student.items[0]);
                    setHasSent(false);
                  }}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    selectedExample === 'student'
                      ? 'text-white'
                      : 'text-gray-600'
                  }`}
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
                    setUserSentence(examples.general.items[0]);
                    setHasSent(false);
                  }}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    selectedExample === 'general'
                      ? 'text-white'
                      : 'text-gray-600'
                  }`}
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
            </div>

            {/* User sentence input */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                你的句子（可修改）：
              </label>
              <textarea
                value={userSentence}
                onChange={(e) => {
                  setUserSentence(e.target.value);
                  setHasSent(false);
                }}
                rows={2}
                className="w-full rounded-2xl p-4 outline-none"
                style={{
                  backgroundColor: 'var(--background-primary)',
                  color: 'var(--text-primary)',
                  boxShadow: '0 2px 8px var(--shadow-md)',
                }}
                placeholder="例如：老實說，我今天其實是……"
              />
            </div>

            {/* Prompt preview */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                會送出的 Prompt（預覽）：
              </label>
              <textarea
                value={promptText}
                readOnly
                rows={4}
                className="w-full rounded-2xl p-4 outline-none"
                style={{
                  backgroundColor: 'var(--background-primary)',
                  color: 'var(--text-secondary)',
                  boxShadow: '0 2px 8px var(--shadow-md)',
                }}
              />
            </div>

            {/* Send button */}
            <div className="flex items-center gap-4 mb-5">
              <button
                onClick={() => setHasSent(true)}
                className="px-6 py-2.5 rounded-2xl font-semibold transition-all hover:scale-105"
                style={{
                  background:
                    'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
                  color: 'white',
                  boxShadow: '0 4px 12px rgba(140, 80, 200, 0.25)',
                }}
              >
                Send to 情緒分析模型 (模擬回覆)
              </button>
            </div>

            {/* Chat bubbles */}
            <div className="space-y-4">
              <div className="flex justify-start">
                <div
                  className="max-w-[90%] rounded-3xl px-5 py-4"
                  style={{
                    backgroundColor: 'var(--background-primary)',
                    color: 'var(--text-primary)',
                    boxShadow: '0 2px 8px var(--shadow-md)',
                  }}
                >
                  <div className="text-sm opacity-70 mb-1">ChatGPT (模擬回覆)</div>
                  <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {hasSent
                      ? hardcodedSentimentResponse(userSentence)
                      : '（按 Send 後會顯示一個單句情緒分析回覆）'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-6 rounded-3xl mb-4"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 4px 16px var(--shadow-md)',
            }}
          >
            <p
              className="text-xl leading-relaxed mb-4"
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
              className="text-xl leading-relaxed mb-4"
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
              className="text-xl leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              這一部分，其實就是情緒分析模型的工作：
              <strong style={{ color: 'var(--color-purple)' }}> 情緒分析（Sentiment Analysis）模型</strong>有點相似：
              它會判斷一句話是偏正面、負面，還是疲累、焦慮等。
            </p>
            <p
              className="text-xl leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              而大型語言模型，其實可以拆解成多個模型，各自負責不同的工作。情緒分析工作就是其中一個。
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
              className="text-xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              💡 今天的大型語言模型，不只訓練會問答，也訓練了分析情緒的能力。
            </p>
          </div>
        </section>

        <LessonNavigation currentPage={3} totalPages={7} />
      </div>
    </div>
  );
}
