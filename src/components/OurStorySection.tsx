import storyImage from "@/assets/story-image.jpg";

const OurStorySection = () => {
  return (
    <section className="page-section bg-background">
      <div className="section-header">
        <span>TUT CONCEPT STORE</span>
        <span>Glyfada, Athens</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-[calc(100vh-60px)]">
        {/* Left: Title + Text */}
        <div className="lg:col-span-2 px-8 md:px-16 py-12 flex flex-col justify-start">
          <h2 className="section-title mb-12">Our Story</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div className="body-text">
              Centuries after Pharaohs carved their names into stone, a new chapter of Egyptian craft begins on a sun-washed corner of Athens. Tut Store was born from a single question: What if the scents, textures, and spirit of Egypt could travel as lightly as a suitcase and land in every curious heart? Its founders are the designers, storytellers, and market traders who gathered treasures from workshops along the Nile: hand-blown glass that traps Cairo's sunset, cotton woven on ancient looms in the Delta, desert spices ground to a rhythm older than song.
            </div>
            <div className="body-text">
              They carried these pieces across the Mediterranean and arranged them like verses in a living poem, each item a stanza in the seven-pillar story of Egypt: Pharaonic innovation, Coptic devotion, Greco-Roman intellect, Islamic artistry, African roots, Mediterranean exchange, and Arab resilience.
              <br /><br />
              When visitors step inside Tut, they don't just shop; they trace the line between heritage and horizon, between maker and wearer. Every purchase whispers the same promise back across the sea: Egypt's creativity is still writing history; one crafted object, one shared tale, one open doorway at a time.
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden lg:block">
          <img
            src={storyImage}
            alt="TUT Store crafts and products"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
