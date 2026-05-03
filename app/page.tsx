export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-24 pb-20">
        <div className="text-5xl mb-6 pixel-float" aria-hidden>&#x1F579;&#xFE0F;</div>
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-mono px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Retro Game Asset Marketplace
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
          Buy &amp; Sell{" "}
          <span className="text-[#58a6ff]">Retro Game Assets</span>
          <span className="cursor-blink text-[#58a6ff]">_</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mb-10">
          The premier marketplace for 8-bit sprites, chiptune music, and assembly code snippets.
          Creators earn 80% revenue. Buyers get instant downloads with full licensing metadata.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200 font-mono"
          >
            Start Selling Assets
          </a>
          <a
            href="#pricing"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] hover:text-[#58a6ff] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200 font-mono"
          >
            View Pricing
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
          {[
            { icon: "&#x1F3A8;", label: "Sprites & Tilesets" },
            { icon: "&#x1F3B5;", label: "Chiptune Sounds" },
            { icon: "&#x1F4BB;", label: "Code Snippets" }
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="text-3xl" dangerouslySetInnerHTML={{ __html: item.icon }} />
              <span className="text-xs text-[#8b949e] font-mono text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 py-20 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-mono">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12 text-center max-w-md">
          One plan. No monthly fees for buyers. Sellers keep 80% of every sale.
        </p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#58a6ff] to-[#79b8ff]" />
          <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-mono px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Creator Plan
          </div>
          <div className="flex items-end gap-1 mb-2">
            <span className="text-5xl font-extrabold text-white">20%</span>
            <span className="text-[#8b949e] mb-2 font-mono">commission</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8 font-mono">per sale — you keep 80%</p>
          <ul className="space-y-3 mb-8">
            {[
              "Upload unlimited assets",
              "Sprite, audio & code support",
              "License & attribution tracking",
              "Instant buyer downloads",
              "Lemon Squeezy payouts",
              "Asset preview generator"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-mono">&gt;</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200 font-mono"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center font-mono">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What types of assets can I sell?",
              a: "You can sell 8-bit and 16-bit sprites, tilesets, spritesheets, chiptune music (WAV, MP3, OGG), sound effects, and retro-style code snippets in assembly, C, or BASIC. All assets include licensing metadata."
            },
            {
              q: "How does the 20% commission work?",
              a: "When a buyer purchases your asset, Lemon Squeezy processes the payment. We take a 20% platform fee and you receive 80% directly to your account. Payouts are handled automatically with no minimum threshold."
            },
            {
              q: "What licenses are supported?",
              a: "Assets can be listed under CC0 (public domain), CC BY, CC BY-SA, or a custom commercial license. Attribution data is embedded in every download so buyers always know the source and terms."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-bold text-white mb-3 font-mono">
                <span className="text-[#58a6ff]">Q: </span>{item.q}
              </h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">
                <span className="text-[#58a6ff] font-mono">A: </span>{item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] px-4 py-8 text-center text-[#8b949e] text-sm font-mono">
        <p>&copy; {new Date().getFullYear()} PixelVault. Built for retro game creators.</p>
      </footer>
    </main>
  );
}
