import locationMap from "@/assets/location-map.png";
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Map */}
          <div className="overflow-hidden">
            <img
              src={locationMap}
              alt="TUT Store location map"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Store front photo */}
          <div className="overflow-hidden">
            <img
              src={locationStore}
              alt="TUT Store exterior at night"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Text */}
          <div className="body-text">
            TUT is strategically located in the prime retail district of Glyfada, at Andrea Papandreou 3 in Athens, occupying 300 sqm across two levels. Positioned in one of the area's most vibrant shopping destinations, the store benefits from high-quality foot traffic driven by affluent residents, destination shoppers, and international visitors.
            <br /><br />
            Surrounded by leading international retailers such as Zara Home, Massimo Dutti, and Sephora, the location reinforces TUT's positioning within a curated, premium retail environment that attracts both affluent local clientele and international visitors.
            <br /><br />
            The scale and layout of the space allow for optimized merchandising, experiential retail activation, and future revenue growth opportunities, reinforcing the location as a key commercial asset within the brand's expansion strategy.
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
