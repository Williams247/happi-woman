'use client';

import { twMerge } from 'tailwind-merge';
import { PlayIcon } from './play';
import { Pause } from './pause';
import { useRef, useState } from 'react';

export function VideoPlayer({ className }: { className?: string }) {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function onPlay() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  }
  return (
    <div className={twMerge('w-full h-full rounded-2xl relative', className)}>
      <video
        id="myVideo"
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        controls={false}
        className="w-full h-full rounded-2xl"
        ref={videoRef}
        poster={'/woman1.jpg'}
      />
      <div className="flex justify-center">
        <button
          className="text-white absolute top-[45%] bg-[#E83F6F] px-6 py-3 rounded-md"
          onClick={onPlay}
          disabled
        >
          {isPaused ? <PlayIcon /> : <Pause />}
        </button>
      </div>
    </div>
  );
}
