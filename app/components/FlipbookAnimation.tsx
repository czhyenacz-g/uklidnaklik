"use client";

import { useState, useEffect } from "react";
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
];

export default function FlipbookAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % frames.length);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-48 h-48 mx-auto">
      <Image
        src={frames[index]}
        alt="Flipbook animace úklidu"
        fill
        className="object-contain"
        priority
        unoptimized
      />
    </div>
  );
}
