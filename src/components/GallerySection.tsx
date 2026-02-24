import gf1 from "@/assets/ground-floor-1.jpg";
import gf2 from "@/assets/ground-floor-2.jpg";
import gf3 from "@/assets/ground-floor-3.jpg";
import gf4 from "@/assets/ground-floor-4.jpg";
import ff1 from "@/assets/first-floor-1.jpg";
import ff2 from "@/assets/first-floor-2.jpg";
import ff3 from "@/assets/first-floor-3.jpg";
import ff4 from "@/assets/first-floor-4.jpg";
import tutLogo from "@/assets/tut-logo.png";

const images = [gf1, gf2, gf3, gf4, ff1, ff2, ff3, ff4];

const GallerySection = () => {
  return (
    <>
      {images.map((img, i) => (
        <section key={i} className="relative w-full h-screen">
          <img
            src={img}
            alt={`Store view ${i + 1}`}
            className="w-full h-full object-cover"
          />
          <img
            src={tutLogo}
            alt="TUT logo"
            className="absolute bottom-6 right-6 h-8 md:h-10 opacity-80"
          />
        </section>
      ))}
    </>
  );
};

export default GallerySection;
