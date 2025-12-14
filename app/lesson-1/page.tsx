'use client';

import Link from 'next/link';
import { useState } from 'react';
import SubscribeModal from '../components/SubscribeModal';

export default function Lesson1() {
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
        {/* 區塊 1：課程開場／導入 */}
        <section className="mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            第一課：由一句心情，到一張貼圖
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
              在這一課，你不需要懂專有名詞，
              只需要：
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>一點點好奇心</li>
              <li>一句你今天真實的心情說話</li>
            </ul>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              我們會一起走過三個步驟：
            </p>
            <ol className="list-decimal list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>寫下一句你真正想說的「Social Energy 狀態」</li>
              <li>看看 AI 怎樣拆解這句話裡的線索</li>
              <li>用這些線索，生成一張屬於你的 Social Energy 貼圖</li>
            </ol>
          </div>
        </section>

        {/* 區塊 2：Step 1 – 寫一句你今天的 Social Energy */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Step 1｜寫一句你今天的 Social Energy
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
              找一個相對安靜的位置，
              想像你在 WhatsApp 跟一位很熟的朋友說話。
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              不是交功課，也不是要「寫得很厲害」，
              而是如實說出你今天的狀態。
            </p>
          </div>

          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            練習：把心情打出來
          </h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <h4
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-purple)' }}
              >
                如果你是上班族，可以這樣寫：
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
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-purple)' }}
              >
                如果你是學生：
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
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-purple)' }}
              >
                如果你已經退休：
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
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-purple)' }}
              >
                如果你是照顧者：
              </h4>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>「一整天在照顧家人，現在只剩『想靜一靜』的力氣。」</li>
              </ul>
            </div>
          </div>

          <div
            className="p-4 rounded-xl text-sm"
            style={{
              backgroundColor: 'var(--background-darker)',
              color: 'var(--text-tertiary)'
            }}
          >
            <strong>提示：</strong>不需要加入「請幫我畫一張圖」這類說明，
            就像平常傳訊息一樣，說出你的心情就可以了。
          </div>
        </section>

        {/* 區塊 3：Step 2 – AI 眼中，你這一句話長什麼樣？ */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Step 2｜AI 眼中，你這一句話長什麼樣？
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
              當你打出一段文字，例如：
              <span className="font-semibold" style={{ color: 'var(--color-purple)' }}>
                「今日 social energy 用晒，只想黏在沙發上不動。」
              </span>
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI 並不會像人一樣，真的「感受到」你的疲累，
              它做的，是把這一句話拆成很多細小的線索，
              再根據這些線索去估計：
              你大概在說怎樣的一個狀態。
            </p>
          </div>

          {/* 3.1：情緒線索 */}
          <div className="mb-8">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              1｜情緒線索：這句話的情緒在偏哪一邊？
            </h3>
            <div
              className="p-6 rounded-2xl mb-4"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                在「今日 social energy 用晒，只想黏在沙發上不動。」這一句裡，
                AI 會特別留意到一些字眼，例如：
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>「用晒」</li>
                <li>「不動」</li>
                <li>「黏在沙發上」</li>
              </ul>
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
                今天的大型語言模型，
                把這種「讀情緒」的能力一併學在同一個大腦裡。
              </p>
              <p
                className="text-sm leading-relaxed mt-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                你不需要記住名稱，只要知道：
                當你說「用晒」、「好攰」、「不想再 social」，
                模型會把它們當作「低能量、需要退後」的信號。
              </p>
            </div>
          </div>

          {/* 3.2：角色與場景線索 */}
          <div className="mb-8">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              2｜角色與場景：誰在說？在哪裡？
            </h3>
            <div
              className="p-6 rounded-2xl mb-4"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                同一句「好攰」，
                上班族、學生、退休人士腦中的畫面往往完全不同。
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                AI 會嘗試在你的文字裡，
                抓出一些關於身份與場景的提示。
              </p>
            </div>
            <div
              className="p-6 rounded-2xl mb-4"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <p className="text-base font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                例如：
              </p>
              <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>提到「開會」、「deadline」、「老闆」 → 上班族的情境</li>
                <li>提到「交功課」、「考試」、「上課」 → 在校學生的情境</li>
                <li>提到「孫」、「飲茶」、「公園」 → 比較接近退休生活</li>
              </ul>
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
                在貼圖上，這會影響：
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1" style={{ color: 'var(--text-secondary)' }}>
                <li>角色長什麼樣子</li>
                <li>背景在什麼地方</li>
                <li>旁邊出現什麼東西</li>
              </ul>
            </div>
          </div>

          {/* 3.3：關鍵詞拆解 */}
          <div className="mb-8">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              3｜關鍵詞拆解：把話變成「AI 聽得懂」的描述
            </h3>
            <div
              className="p-6 rounded-2xl mb-4"
              style={{ backgroundColor: 'var(--background-secondary)' }}
            >
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                對模型來說，你那一句完整的句子，
                並不會被當成「一整塊」來理解。
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                它會先拆成一個個較小的單位（可以想像成「字粒」），例如：
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['今日', 'social', 'energy', '用晒', '黏在', '沙發', '不動'].map((word) => (
              <span
                key={word}
                className="px-3 py-1 rounded-xl text-sm"
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
                <li>「用晒」、「攰」、「不動」
                  會比較靠近「低能量」、「疲憊」這一群字；</li>
                <li>「沙發」、「床」、「被窩」
                  會比較靠近「休息」、「放鬆」這一群字。</li>
              </ul>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                當模型嘗試幫你生成貼圖時，
                其實是在內心裡拼湊出一段大概的畫面描述，例如：
              </p>
              <div
                className="p-4 rounded-2xl my-4 border-l-4"
                style={{
                  backgroundColor: 'var(--background-darker)',
                  borderColor: 'var(--color-purple)',
                  boxShadow: '0 2px 8px var(--shadow)',
                }}
              >
                <p
                  className="text-base italic leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  「一個很累、energy 用盡的人，
                  軟軟地黏在沙發上，
                  表情無力，整體感覺是一個低能量但安全的空間。」
                </p>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-tertiary)' }}
              >
                這段描述，不一定會完整寫出來，
                但會成為圖像模型作畫時的重要參考。
              </p>
            </div>
          </div>
        </section>

        {/* 區塊 4：Step 3 – 從文字到貼圖 */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Step 3｜從文字到貼圖：幾個 AI「小工人」的合作
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
              一張看似簡單的 Social Energy 貼圖，
              背後其實經過了不同能力的合作。
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              你可以把它想像成幾位「AI 小工人」一起幫忙：
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: 'var(--background-secondary)',
                boxShadow: '0 4px 16px var(--shadow-md)',
              }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-purple)' }}
              >
                情緒小工人
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                負責讀你句子裡的情緒線索：
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
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
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-purple)' }}
              >
                角色與場景小工人
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                留意你提到的身份與場景：
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
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
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-purple)' }}
              >
                畫面設計小工人
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                把前面得到的訊息整理成一段畫面說明，
                再交給圖像生成的部分，
                讓貼圖真正「長出來」。
              </p>
            </div>
          </div>

          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: 'var(--background-darker)' }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              在早期，這些工作往往由不同的 AI 模型分開處理；
              而今天，大型語言模型把很多能力整合在同一個大腦裡，
              再加上圖像模型，才成為你現在看到的體驗。
            </p>
          </div>
        </section>

        {/* 區塊 5：小小回顧 */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            回顧：你在這一課，其實已經做了什麼？
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
              在這一課，你已經：
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>寫出一句真正屬於自己的 Social Energy 描述</li>
              <li>用這一句話，讓模型嘗試捕捉你的情緒與角色</li>
              <li>看見模型如何把這些線索整理成可以畫圖的說明</li>
              <li>完成了屬於自己的第一張（或一組） Social Energy 貼圖雛形</li>
            </ul>
            <p
              className="text-base leading-relaxed mt-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              即使你還未能用專有名詞解釋整個流程，
              你已經多了一個很重要的感覺：
            </p>
            <div
              className="p-4 rounded-xl mt-4 border-l-4"
              style={{
                backgroundColor: 'var(--background-darker)',
                borderColor: 'var(--primary)',
              }}
            >
              <p
                className="text-base font-semibold"
                style={{ color: 'var(--color-purple)' }}
              >
                📌 原來 AI 並不是「魔法」，
                而是一連串有步驟的處理與合作。
              </p>
            </div>
          </div>
        </section>

        {/* 區塊 6：接下來的課程預告 */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            下一步：我們會走到哪裡？
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
              <li>用「圖對圖（Image-to-Image）」看看，
                模型如何在保留姿勢的情況下，替你變換風格；</li>
              <li>說說為什麼有時候貼圖會「畫錯樣」，
                例如數量畫錯、表情有點奇怪，
                那並不是你不會用，而是模型本身的限制；</li>
              <li>再從這些例子，回到
                「一個模型裡，同時訓練多種任務」的概念。</li>
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
              如果你希望在第二課、第三課開放時，
              以及 slowAI App 正式上架時，
              第一時間收到通知，
              可以在下方留下你的電郵。
            </p>
            <p
              className="text-base leading-relaxed mb-6 text-white/90"
            >
              我會在你準備好的時候，
              和你一起慢慢走向下一步。🌿
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
      </div>
    </div>
  );
}
