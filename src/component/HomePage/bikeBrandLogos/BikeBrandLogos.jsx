import Image from "next/image";

const logos = [
  { src: "/carBikeLogoImage/bajaj.png", alt: "Bajaj" },
  { src: "/carBikeLogoImage/yamaha.png", alt: "Yamaha" },
  { src: "/carBikeLogoImage/tvs.png", alt: "TVS" },
  { src: "/carBikeLogoImage/royal_enfield.png", alt: "Royal Enfield" },
  { src: "/carBikeLogoImage/ktm.png", alt: "KTM" },
  { src: "/carBikeLogoImage/jawa.png", alt: "Jawa" },
  { src: "/carBikeLogoImage/husqvarna.png", alt: "Husqvarna" },
  { src: "/carBikeLogoImage/honda.png", alt: "Honda" },
  { src: "/carBikeLogoImage/hero.png", alt: "Hero" },
  { src: "/carBikeLogoImage/ducati.png", alt: "Ducati" },
  { src: "/carBikeLogoImage/ather.png", alt: "Ather" },
];

export default function BikeBrandLogos() {
  return (
    <div className="w-full py-6 px-4 bg-white">
      <div className=" container mx-auto flex flex-wrap items-center justify-center gap-6">
        {logos.map((logo) => (
          <div key={logo.alt} className="w-20 h-20 relative">
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
