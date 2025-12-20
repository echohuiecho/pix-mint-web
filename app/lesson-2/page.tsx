'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Lesson2() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/lesson-2/1');
  }, [router]);

  return null;
}
