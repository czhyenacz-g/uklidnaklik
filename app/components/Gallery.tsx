"use client";

import { useState, useEffect, useCallback } from "react";
import content from "../../data/content.json";

type GalleryItem = { src: string; alt: string; caption: string };

export default function Gallery() {
  const items: GalleryItem[] = content.gallery;
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  return (
    <>
      <div id="fotky" className="section-card p-6 sm:p-8 lg:h-full">
        <h3 className="text-xl font-black text-slate-900 mb-1">Fotky z úklidu</h3>
        <p className="text-slate-500 text-sm mb-5">Ukázka prostředí, čistoty a kvality naší práce.</p>

        <div className="grid grid-cols-2 gap-3">
          {items.slice(0, 6).map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(img)}
              className="group rounded-xl overflow-hidden border border-slate-200 bg-slate-50 text-left shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={140}
                height={105}
                loading="lazy"
                className="w-full h-20 object-cover"
              />
              <span className="block px-2 py-1.5 text-[11px] font-semibold text-slate-700 truncate">
                {img.caption}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-5 text-center text-[11px] text-slate-400 italic">
          Demo placeholdery — brzy nahradíme reálnými fotkami
        </p>
      </div>

      {selected && (
        <div
          className="lightbox-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selected.caption}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={close} aria-label="Zavřít">
              ✕
            </button>
            <img src={selected.src} alt={selected.alt} className="lightbox-img" />
            <p className="lightbox-caption">{selected.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
