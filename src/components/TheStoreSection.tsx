import storeInterior from "@/assets/store-interior.png";

const TheStoreSection = () => {
  return (
    <section className="page-section bg-background">
      <div className="section-header">
        <span>TUT CONCEPT STORE</span>
        <span>Glyfada, Athens</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[calc(100vh-60px)]">
        {/* Left: Content card */}
        <div className="bg-card px-8 md:px-14 py-12 flex flex-col justify-start">
          <h2 className="section-title mb-8">The Store</h2>

          <div className="body-text mb-8">
            Spanning two thoughtfully designed floors, TUT unfolds as a journey through contemporary Egyptian creativity. Set within a modern, minimalist interior, the space is intentionally curated to let each piece breathe—allowing craftsmanship, texture, and detail to take center stage. Every corner invites discovery, encouraging clients to slow down, explore, and connect with the stories behind the brands.
            <br /><br />
            The atmosphere is warm and welcoming—balancing sophistication with comfort so guests feel both inspired and at ease. Guided by a passionate and highly trained team, the experience extends beyond shopping; it becomes personal, immersive, and memorable. At TUT, retail is transformed into a moment of cultural appreciation and refined discovery.
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-foreground tracking-wide mb-1">In-Store Categories:</h3>
            <p className="body-text">Jewelry, Ready-to-Wear, Footwear, Handbags, and Home Décor.</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground tracking-wide mb-3">Our Brand Partners:</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 text-xs text-center text-muted-foreground font-medium tracking-wider uppercase">
              <span>Kangaroo</span>
              <span>LABOGA</span>
              <span>RITMO</span>
              <span>HUWA</span>
              <span>KENSHO</span>
              <span>KAHHAL 1871</span>
              <span>INDIRA</span>
              <span>INCA & CO.</span>
              <span>Three Fifty Nine</span>
              <span>AUSETIA</span>
              <span>MIAYA</span>
              <span>JUDE BENHALIM</span>
              <span>MALAIKA</span>
              <span>Analogue</span>
              <span>HOUSE BABYLON</span>
              <span>REBELCAIRO</span>
              <span>SHOSHA KAMAL</span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden lg:block">
          <img
            src={storeInterior}
            alt="TUT Store interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TheStoreSection;
