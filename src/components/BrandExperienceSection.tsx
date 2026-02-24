import brandExp1 from "@/assets/brand-exp-1.jpg";
import brandExp2 from "@/assets/brand-exp-2.jpg";
import tutLogo from "@/assets/tut-logo.png";

const BrandExperienceSection = () => {
  return (
    <section className="page-section bg-background">
      <div className="section-header">
        <span>TUT CONCEPT STORE</span>
        <span>Glyfada, Athens</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_auto] gap-0 min-h-[calc(100vh-60px)]">
        {/* Left image - large */}
        <div className="block lg:block overflow-hidden h-64 lg:h-auto">
          <img
            src={brandExp1}
            alt="Brand experience"
            className="w-full h-full object-cover gallery-image"
          />
        </div>

        {/* Center content */}
        <div className="px-8 md:px-16 py-12 flex flex-col justify-center relative">
          <h2 className="section-title mb-8 text-4xl md:text-5xl animate-on-scroll">
            The Brand Experience
          </h2>

          <p className="body-text mb-8">
            Leveraging our expertise in international luxury retail, brand management and visual merchandising, we provide the strategic management necessary to introduce your brand in an international market. Secure your space in our curated environment to scale your presence alongside a partner dedicated to your growth.
          </p>

          <h3 className="text-xl font-heading font-semibold text-primary mb-4">What We Do</h3>
          <ul className="space-y-2 body-text list-disc pl-5">
            <li>Brands will be presented in a high end luxury environment</li>
            <li>Well trained sales team to communicate brands stories to customers</li>
            <li>Monthly reports and feedback to help the brand develop future collections</li>
            <li>Launch events and VIP events for collection launches</li>
            <li>Active social media presence</li>
          </ul>

          
        </div>

        {/* Right image - smaller */}
        <div className="flex items-center justify-center py-8 px-4 lg:pr-8 lg:py-12">
          <img
            src={brandExp2}
            alt="Brand products"
            className="w-full h-64 lg:w-72 xl:w-96 lg:h-[28rem] xl:h-[34rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandExperienceSection;
