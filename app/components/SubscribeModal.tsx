'use client';

import { useState } from 'react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    const normalizedEmail = email.trim();
    if (!normalizedEmail) {
      setMessage({ type: 'error', text: '請輸入電子郵件地址' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      setMessage({ type: 'error', text: '請輸入有效的電子郵件地址' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: data.message || '訂閱成功！我們會在第一時間通知你。' });
        setEmail('');
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setMessage(null);
        }, 2000);
      } else {
        // Use server error message or fallback
        setMessage({
          type: 'error',
          text: data.error || '訂閱失敗，請稍後再試。'
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage({ type: 'error', text: '網路連線錯誤，請檢查網路後再試。' });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl p-8"
        style={{
          backgroundColor: 'var(--background-secondary)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-xl transition-all hover:opacity-70"
          style={{ color: 'var(--text-secondary)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <h2
          className="text-3xl font-bold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          訂閱通知
        </h2>
        <p
          className="text-base mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          當第二課、第三課開放時，以及 slowAI App 正式上架時，我們會第一時間通知你。
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="請輸入你的電子郵件"
              className="w-full px-4 py-3 rounded-2xl border-2 transition-all focus:outline-none focus:ring-2"
              style={{
                backgroundColor: 'var(--background-primary)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                boxShadow: '0 2px 8px var(--shadow)',
              }}
              disabled={isLoading}
              required
            />
          </div>

          {message && (
            <div
              className={`mb-4 p-3 rounded-lg text-sm ${
                message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {message.text}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 rounded-2xl font-semibold text-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
              color: 'white',
              boxShadow: '0 4px 16px rgba(140, 80, 200, 0.3)',
            }}
          >
            {isLoading ? '處理中...' : '訂閱'}
          </button>
        </form>
      </div>
    </div>
  );
}
