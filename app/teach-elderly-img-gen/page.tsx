'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TeachElderlyImgGen() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/teach-elderly-img-gen/1');
  }, [router]);

  return null;
}
