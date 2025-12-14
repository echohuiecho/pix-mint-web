'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Lesson1() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/lesson-1/1');
  }, [router]);

  return null;
}

// Legacy content has been split into multiple pages:
// /lesson-1/1 - Introduction
// /lesson-1/2 - Step 1
// /lesson-1/3 - Step 2.1 (情緒線索)
// /lesson-1/4 - Step 2.2 (角色與場景)
// /lesson-1/5 - Step 2.3 (關鍵詞拆解)
// /lesson-1/6 - Step 3
// /lesson-1/7 - Review
