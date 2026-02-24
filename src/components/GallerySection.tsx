import gf1 from "@/assets/ground-floor-1.jpg";
import gf2 from "@/assets/ground-floor-2.jpg";
import gf3 from "@/assets/ground-floor-3.jpg";
import gf4 from "@/assets/ground-floor-4.jpg";
import ff1 from "@/assets/first-floor-1.jpg";
import ff2 from "@/assets/first-floor-2.jpg";
import ff3 from "@/assets/first-floor-3.jpg";
import ff4 from "@/assets/first-floor-4.jpg";

const GallerySection = () => {
  const groundFloor = [gf1, gf2, gf3, gf4];
  const firstFloor = [ff1, ff2, ff3, ff4];

  return (
    <>
      {/* Ground Floor */}
      <section className="bg-background">
        <h2 className="px-8 py-6 text-xs tracking-[0.4em] uppercase text-muted-foreground">
          GROUND FLOOR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {groundFloor.map((img, i) => (
            <div key={`gf-${i}`} className="aspect-video overflow-hidden">
              <img
                src={img}
                alt={`Ground floor view ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* First Floor */}
      <section className="bg-background">
        <h2 className="px-8 py-6 text-xs tracking-[0.4em] uppercase text-muted-foreground">
          FIRST FLOOR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {firstFloor.map((img, i) => (
            <div key={`ff-${i}`} className="aspect-video overflow-hidden">
              <img
                src={img}
                alt={`First floor view ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GallerySection;
