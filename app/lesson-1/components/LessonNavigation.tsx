'use client';

import Link from 'next/link';

interface LessonNavigationProps {
  currentPage: number;
  totalPages: number;
}

export default function LessonNavigation({ currentPage, totalPages }: LessonNavigationProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  const progress = (currentPage / totalPages) * 100;

  return (
    <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="flex justify-between items-center gap-4">
        {prevPage ? (
          <Link
            href={`/lesson-1/${prevPage}`}
            className="px-6 py-3 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
            style={{
              border: '2px solid var(--color-blue)',
              color: 'var(--color-blue)',
              backgroundColor: 'transparent',
              boxShadow: '0 2px 8px var(--shadow)',
            }}
          >
            <span>←</span>
            <span>上一頁</span>
          </Link>
        ) : (
          <div></div>
        )}

        {/* Progress Bar */}
        <div className="flex-1 mx-4">
          <div
            className="w-full h-2 rounded-full overflow-hidden"
            style={{
              backgroundColor: 'var(--background-secondary)',
              boxShadow: '0 2px 4px var(--shadow)',
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
                boxShadow: '0 2px 8px rgba(140, 80, 200, 0.3)',
              }}
            />
          </div>
        </div>

        {nextPage ? (
          <Link
            href={`/lesson-1/${nextPage}`}
            className="px-6 py-3 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
            style={{
              background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
              color: 'white',
              boxShadow: '0 4px 12px rgba(140, 80, 200, 0.25)',
            }}
          >
            <span>下一頁</span>
            <span>→</span>
          </Link>
        ) : (
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
            style={{
              background: 'linear-gradient(90deg, var(--gradient-purple-start) 0%, var(--gradient-blue-end) 100%)',
              color: 'white',
              boxShadow: '0 4px 12px rgba(140, 80, 200, 0.25)',
            }}
          >
            <span>返回首頁</span>
          </Link>
        )}
      </div>
    </div>
  );
}
