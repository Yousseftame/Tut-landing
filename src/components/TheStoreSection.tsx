import storeBg from "@/assets/store-bg.jpg";
import brandLogos from "@/assets/brand-logos.png";

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
        <div className="absolute inset-0 bg-white/50" />

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

          {/* Brand logos image */}
          <img
            src={brandLogos}
            alt="Our Brand Partners logos"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TheStoreSection;
