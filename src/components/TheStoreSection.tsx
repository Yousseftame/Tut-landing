import storeBg from "@/assets/store-bg.jpg";

const TheStoreSection = () => {
  return (
    <section className="page-section bg-background">
      <div className="section-header">
        <span>TUT CONCEPT STORE</span>
        <span>Glyfada, Athens</span>
      </div>

      {/* Full-width background image with white overlay */}
      <div
        className="relative min-h-[calc(100vh-60px)] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${storeBg})` }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/30" />

        {/* Content box */}
        <div className="relative z-10 ml-6 md:ml-12 lg:ml-16 my-8 max-w-xl bg-white/90 backdrop-blur-sm p-8 md:p-10 lg:p-12">
          <h2 className="section-title mb-6">The Store</h2>

          <div className="body-text mb-4 text-sm leading-relaxed">
            Spanning two thoughtfully designed floors, TUT unfolds as a journey through contemporary Egyptian creativity. Set within a modern, minimalist interior, the space is intentionally curated to let each piece breathe—allowing craftsmanship, texture, and detail to take center stage. Every corner invites discovery, encouraging clients to slow down, explore, and connect with the stories behind the brands.
          </div>
          <div className="body-text mb-5 text-sm leading-relaxed">
            The atmosphere is warm and welcoming—balancing sophistication with comfort so guests feel both inspired and at ease. Guided by a passionate and highly trained team, the experience extends beyond shopping; it becomes personal, immersive, and memorable. At TUT, retail is transformed into a moment of cultural appreciation and refined discovery.
          </div>

          <div className="mb-1">
            <span className="text-sm font-medium text-foreground">In-Store Categories:</span>
          </div>
          <p className="body-text text-sm mb-5">
            Jewelry, Ready-to-Wear, Footwear, Handbags, and Home Décor.
          </p>

          <div className="mb-4">
            <span className="text-sm font-medium text-foreground">Our Brand Partners:</span>
          </div>

          {/* Brand logos grid - text-based */}
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-x-4 gap-y-3 text-[10px] sm:text-xs text-center text-foreground font-semibold tracking-wider uppercase items-center">
            <span className="font-light italic tracking-[0.15em] normal-case text-xs">kangaroo</span>
            <span className="font-black text-xs tracking-[0.05em]">LABOGA</span>
            <span className="font-bold text-xs italic tracking-[0.05em]">RITMO</span>
            <span className="font-medium text-[10px] tracking-[0.2em]">HUWA</span>
            <span className="font-light italic normal-case text-xs" style={{ fontFamily: 'var(--font-heading)' }}>Joy and Lily's</span>
            <span className="font-bold text-[10px] tracking-[0.15em]">KAHHAL 1871</span>
            <span className="font-light text-[10px] tracking-[0.2em]">three fifty nine</span>
            <span className="font-medium text-[10px] tracking-[0.1em]">INDIRA</span>
            <span className="font-bold text-xs tracking-[0.15em]">KENSHO</span>
            <span className="font-medium text-[10px] tracking-[0.05em]">INCA & CO.</span>
            <span className="font-medium text-[10px] tracking-[0.1em]">AUSETIA</span>
            <span className="font-light text-xs tracking-[0.05em]" style={{ fontFamily: 'var(--font-display)' }}>MIAYA</span>
            <span className="font-bold text-[10px] tracking-[0.1em]">JUDE BENHALIM</span>
            <span className="font-medium text-[10px] tracking-[0.05em]">MALAIKA</span>
            <span className="font-medium text-xs italic" style={{ fontFamily: 'var(--font-heading)' }}>Analogue</span>
            <span className="font-black text-[10px] tracking-[0.1em] leading-tight">HOUSE<br/>BABYLON</span>
            <span className="font-black text-xs tracking-[0.15em]">REBELCAIRO</span>
            <span className="font-bold text-xs tracking-[0.15em]">SHOSHA KAMAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheStoreSection;
