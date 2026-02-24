import locationStore from "@/assets/location-store.jpg";

const LocationSection = () => {
  return (
    <section className="page-section bg-background">
      <div className="section-header">
        <span>TUT CONCEPT STORE</span>
        <span>Glyfada, Athens</span>
      </div>

      <div className="px-8 md:px-16 py-4">
        <h2 className="section-title mb-8">Location</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Google Maps Embed */}
          <div className="overflow-hidden h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.902342306171!2d23.75290881626849!3d37.86257539967292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bf001ed9b0d5%3A0x9070b3bb960341c!2sTUT!5e0!3m2!1sar!2seg!4v1771962289334!5m2!1sar!2seg"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TUT Store location on Google Maps"
            />
          </div>

          {/* Store front photo */}
          <div className="overflow-hidden h-[400px] md:h-[500px]">
            <img
              src={locationStore}
              alt="TUT Store exterior at night"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="body-text flex flex-col justify-between h-[400px] md:h-[500px]">
            <p>
              TUT is strategically located in the prime retail district of Glyfada, at Andrea Papandreou 3 in Athens, occupying 300 sqm across two levels. Positioned in one of the area's most vibrant shopping destinations, the store benefits from high-quality foot traffic driven by affluent residents, destination shoppers, and international visitors.
            </p>
            <p>
              Surrounded by leading international retailers such as Zara Home, Massimo Dutti, and Sephora, the location reinforces TUT's positioning within a curated, premium retail environment that attracts both affluent local clientele and international visitors.
            </p>
            <p>
              The scale and layout of the space allow for optimized merchandising, experiential retail activation, and future revenue growth opportunities, reinforcing the location as a key commercial asset within the brand's expansion strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
