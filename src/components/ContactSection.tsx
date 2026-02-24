import contactImage from "@/assets/contact-image.jpg";
import tutLogo from "@/assets/tut-logo.png";

const ContactSection = () => {
  return (
    <section className="page-section bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
        {/* Left: Contact info */}
        <div className="px-8 md:px-16 py-16 flex flex-col justify-center items-center text-center">
          <h2 className="section-title mb-12 animate-on-scroll">CONTACT US</h2>

          <div className="mb-10">
            <h3 className="text-lg font-heading font-semibold text-primary tracking-wide mb-1">
              NOURA EBEID
            </h3>
            <a
              href="mailto:noura.ebeid@tut.store"
              className="body-text hover:text-primary transition-colors"
            >
              noura.ebeid@tut.store
            </a>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-heading font-semibold text-primary tracking-wide mb-1">
              TUT CONCEPT STORE
            </h3>
            <p className="body-text">
              Andrea Papandreou 3<br />
              Glyfada, Athens
            </p>
            <p className="body-text mt-1">+3 21 0898 3475</p>
          </div>

          <img
            src={tutLogo}
            alt="TUT - Made by Egyptians"
            className="w-48 md:w-56"
          />
        </div>

        {/* Right: Image */}
        <div className="overflow-hidden h-72 lg:h-auto">
          <img
            src={contactImage}
            alt="TUT Store products"
            className="w-full h-full object-cover gallery-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
