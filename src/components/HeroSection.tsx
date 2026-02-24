import tutLogo from "@/assets/tut-logo.png";

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
            backgroundImage: `url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80)`,
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
