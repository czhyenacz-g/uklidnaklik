const COLOR = "#3EC1D3";

export default function GiftVoucher() {
  return (
    <section id="darkovy-poukaz" className="py-16 px-4" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-3">
          Darujte{" "}
          <span className="sketch-underline-blue" style={{ color: COLOR }}>úklid</span>
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-10">
          Dárkový poukaz na úklid se hodí, když chcete někomu opravdu ulevit. Pro demo zatím ukazujeme návrh poukazu — konkrétní hodnotu a podmínky si potvrdíme individuálně.
        </p>

        {/* Voucher image — responsive wrapper prevents overflow */}
        <div className="w-full overflow-hidden rounded-2xl shadow-md border border-gray-100 mb-10">
          <img
            src="/gift-voucher-demo.svg"
            alt="Demo dárkový poukaz Úklid na klik — hodnota 1000 Kč"
            className="w-full h-auto block"
            width={560}
            height={320}
          />
        </div>

        <a
          href="#objednavka"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition hover:scale-105 active:scale-95"
          style={{ backgroundColor: COLOR }}
        >
          🎁 Zeptat se na poukaz
        </a>

        <p className="mt-5 text-xs text-gray-400">
          Zatím jde o demo nabídku — cenu, platnost a podmínky si potvrdíme osobně.
        </p>
      </div>
    </section>
  );
}
