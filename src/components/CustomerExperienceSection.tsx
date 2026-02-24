import custExp1 from "@/assets/customer-exp-1.jpg";
import custExp2 from "@/assets/customer-exp-2.jpg";
import tutLogo from "@/assets/tut-logo.png";

const CustomerExperienceSection = () => {
  return (
    <section className="page-section bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_auto] gap-0 min-h-[calc(100vh-60px)]">
        {/* Left image - large */}
        <div className="hidden lg:block">
          <img
            src={custExp1}
            alt="Customer experience"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center content */}
        <div className="px-8 md:px-16 py-12 flex flex-col justify-center relative">
          <h2 className="section-title mb-8 text-4xl md:text-5xl">
            The Customer Experience
          </h2>

          <div className="body-text space-y-6">
            <p>
              At TUT, customer engagement is driven through a dynamic calendar of curated events and in-store activations, creating multiple touchpoints that encourage repeat visitation and sustained brand discovery.
            </p>
            <p>
              A carefully curated portfolio of brand partners ensures a continuous evolution of collections and concepts, introducing new capsules, exclusive launches, and expanded product categories over time. This approach maintains freshness that drive sustained commercial momentum throughout the year.
            </p>
            <p>
              Visitors to TUT experience a carefully curated alternative to fast fashion—an immersive environment designed for discovery, appreciation, and meaningful connection. Supported by a dedicated and highly trained team, the store delivers exceptional service within a dynamic space that elevates both the brands and the overall retail experience.
            </p>
          </div>

          
        </div>

        {/* Right image - smaller */}
        <div className="hidden lg:flex items-center pr-8 py-12">
          <img
            src={custExp2}
            alt="Store display"
            className="w-56 xl:w-72 h-80 xl:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerExperienceSection;
