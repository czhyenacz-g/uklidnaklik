"use client";

import content from "../../data/content.json";

const COLOR = "#3EC1D3";

type GalleryItem = { src: string; alt: string; caption: string };

export default function Gallery() {
  const items: GalleryItem[] = content.gallery;

  return (
    <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="px-4 mb-10 text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-2">
          Fotky z{" "}
          <span className="sketch-underline-blue" style={{ color: COLOR }}>úklidu</span>
        </h2>
        <p className="text-gray-500 max-w-md mx-auto text-base">
          Ukázka prostředí, čistoty a kvality naší práce.
        </p>
      </div>

      <div className="gallery-outer">
        <div className="gallery-track">
          {/* Duplicated for seamless CSS marquee on desktop */}
          {[...items, ...items].map((img, i) => (
            <figure key={i} className="gallery-card">
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

      <p className="mt-8 text-center text-xs text-gray-400 px-4">
        Demo placeholdery — brzy nahradíme reálnými fotkami
      </p>
    </section>
  );
}
