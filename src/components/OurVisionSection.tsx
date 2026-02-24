import visionImage from "@/assets/vision-image.jpg";

const OurVisionSection = () => {
  return (
    <section className="page-section bg-background">
      <div className="section-header">
        <span>TUT CONCEPT STORE</span>
      </div>

      {/* Full-width image */}
      <div className="w-full h-[40vh] md:h-[55vh] overflow-hidden">
        <img
          src={visionImage}
          alt="TUT Store interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vision text */}
      <div className="px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <h2 className="section-title">Our Vision</h2>
          <div className="lg:col-span-2 body-text max-w-3xl">
            TUT is a luxury concept store dedicated to celebrating exceptional Egyptian talent and craftsmanship. Our vision is to create an immersive retail experience where visitors can discover a carefully curated selection of ready-to-wear, fine jewelry, distinctive accessories, and elevated home décor within a refined and thoughtfully designed setting.
            <br /><br />
            We provide designers with a prestigious platform to showcase their collections, share their stories, and access an international audience within an unparalleled retail environment. Through a multidimensional space, TUT invites clients on a journey of discovery—where they can explore, connect, shop, and be inspired by a new expression of modern luxury.
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVisionSection;
