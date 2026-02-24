import tutLogo from "@/assets/tut-logo.png";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="page-section flex flex-col bg-background">
      <div className="flex flex-col items-center justify-center pt-16 pb-8 px-6">
        <img
          src={tutLogo}
          alt="TUT - Made by Egyptians"
          className="w-64 md:w-80 lg:w-96 mb-6"
        />
        <p className="text-lg md:text-xl font-heading text-muted-foreground tracking-wide">
          Gylfada, Athens
        </p>
      </div>
      <div className="flex-1 w-full overflow-hidden">
        <div
          className="w-full h-full min-h-[50vh] bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
