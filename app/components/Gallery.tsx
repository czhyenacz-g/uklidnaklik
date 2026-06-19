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
      <section className="py-20 bg-[#3EC1D3]">
        <div className="px-4 mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-2">
            Fotky z{" "}
            <span className="sketch-underline-blue">úklidu</span>
          </h2>
          <p className="text-slate-900 max-w-md mx-auto text-base">
            Ukázka prostředí, čistoty a kvality naší práce.
          </p>
        </div>

        <div className="section-card mx-4 sm:mx-8 py-8">
          <div className="gallery-outer">
            <div className="gallery-track">
              {[...items, ...items].map((img, i) => (
                <figure
                  key={i}
                  className="gallery-card"
                  onClick={() => setSelected(items[i % items.length])}
                  role="button"
                  tabIndex={i < items.length ? 0 : -1}
                  aria-label={`Zvětšit: ${img.caption}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setSelected(items[i % items.length]);
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={280}
                    height={210}
                    loading="lazy"
                    className="gallery-img"
                  />
                  <figcaption className="gallery-caption">{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-[11px] text-slate-400 italic px-4">
            Demo placeholdery — brzy nahradíme reálnými fotkami
          </p>
        </div>
      </section>

      {selected && (
        <div
          className="lightbox-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selected.caption}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={close}
              aria-label="Zavřít"
            >
              ✕
            </button>
            <img
              src={selected.src}
              alt={selected.alt}
              className="lightbox-img"
            />
            <p className="lightbox-caption">{selected.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
