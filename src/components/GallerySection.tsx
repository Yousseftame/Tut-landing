import gf1 from "@/assets/ground-floor-1.jpg";
import gf2 from "@/assets/ground-floor-2.jpg";
import gf3 from "@/assets/ground-floor-3.jpg";
import gf4 from "@/assets/ground-floor-4.jpg";
import ff1 from "@/assets/first-floor-1.jpg";
import ff2 from "@/assets/first-floor-2.jpg";
import ff3 from "@/assets/first-floor-3.jpg";
import ff4 from "@/assets/first-floor-4.jpg";

const images = [gf1, gf2, gf3, gf4, ff1, ff2, ff3, ff4];

const GallerySection = () => {
  return (
    <>
      {images.map((img, i) => (
        <section
          key={i}
          className="relative w-full h-[60vw] sm:h-[70vw] md:h-screen overflow-hidden"
        >
          <img
            src={img}
            alt={`Store view ${i + 1}`}
            className="w-full h-full object-cover gallery-image"
          />
        </section>
      ))}
    </>
  );
};

export default GallerySection;
