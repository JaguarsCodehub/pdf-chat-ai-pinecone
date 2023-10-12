'use client';

import { Chat } from '@/components/chat';
import { DarkModeToggle } from '@/components/dark-mode-toggle';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <main className='relative container flex min-h-screen flex-col'>
      <div className='p-4 flex h-14 items-center justify-between support-backdrop-blue:bg-background/60 sticky top-0 z-50 w-full border-b border-gray-700 bg-background/95 backdrop-blur'>
        <span className='font-bold'>PDF chat API</span>
        <DarkModeToggle />
      </div>
      <div className='flex flex-1 py-4'>
        <div className='w-full'>
          <Chat />
        </div>
      </div>
    </main>
  );
}
