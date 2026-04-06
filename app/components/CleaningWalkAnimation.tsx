"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const frames = [
  "/flipbook/frame-01.png",
  "/flipbook/frame-02.png",
  "/flipbook/frame-03.png",
  "/flipbook/frame-04.png",
  "/flipbook/frame-05.png",
  "/flipbook/frame-06.png",
  "/flipbook/frame-07.png",
  "/flipbook/frame-08.png",
  "/flipbook/frame-09.png",
  "/flipbook/frame-10.png",
  "/flipbook/frame-11.png",
  "/flipbook/frame-12.png",
];

const FRAME_INTERVAL = 150;  // ms per frame
const CROSS_DURATION = 9000; // ms to walk across viewport
const PAUSE_DURATION = 3000; // ms to pause before restarting

export default function CleaningWalkAnimation() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [walking, setWalking] = useState(false);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Frame cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((i) => (i + 1) % frames.length);
    }, FRAME_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Walk cycle: pause → walk → pause → ...
  useEffect(() => {
    function startWalk() {
      setWalking(true);
      pauseTimer.current = setTimeout(() => {
        setWalking(false);
        pauseTimer.current = setTimeout(startWalk, PAUSE_DURATION);
      }, CROSS_DURATION);
    }

    // Initial pause before first walk
    pauseTimer.current = setTimeout(startWalk, PAUSE_DURATION);

    return () => {
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        pointerEvents: "none",
        zIndex: 50,
        overflow: "hidden",
        height: "160px",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "120px",
          height: "120px",
          transform: walking ? "translateX(calc(100vw + 120px))" : "translateX(-120px)",
          transition: walking
            ? `transform ${CROSS_DURATION}ms linear`
            : "none",
        }}
      >
        <Image
          src={frames[frameIndex]}
          alt="Úklidová paní"
          fill
          className="object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}
