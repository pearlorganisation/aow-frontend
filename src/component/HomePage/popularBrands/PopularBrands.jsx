// Importing the Next.js Image component for optimized image rendering
import Image from 'next/image';
// Importing a right arrow icon from react-icons
import { IoIosArrowForward } from "react-icons/io";

// Array of brand objects containing name and logo path
const brands = [
  { name: 'Audi', logo: '/brandImage/audi.png' },
  { name: 'Tata', logo: '/brandImage/tata.png' },
  { name: 'Mercedes', logo: '/brandImage/mercedes.png' },
  { name: 'BMW', logo: '/brandImage/bmw.png' },
  { name: 'Renault', logo: '/brandImage/renault.png' },
  { name: 'Hyundai', logo: '/brandImage/hyundai.png' },
  { name: 'Suzuki', logo: '/brandImage/suzuki.png' },
  { name: 'Mahindra', logo: '/brandImage/mahindra.png' },
  { name: 'Volvo', logo: '/brandImage/volvo.png' },
  { name: 'Tata Hitachi', logo: '/brandImage/tata-hitachi.png' },
  { name: 'Kia', logo: '/brandImage/kia.png' },
];

// React component to display popular car brands
export default function PopularBrands() {
  return (
    <div className="py-6 px-6 lg:px-20">
      {/* Header section with title and 'See all' link */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-blue-600">
          Popular Brands
        </h2>
        <div className="flex items-center gap-1">
          <a href="#" className="text-sm text-gray-500 hover:underline">
            See all
          </a>
          <IoIosArrowForward />
        </div>
      </div>

      {/* Brand logos grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-0 drop-shadow-sm">
        {brands.map((brand) => (
          <div key={brand.name} className="p-0 m-0">
            {/* Optimized image loading and rendering with Next.js */}
            <Image
              src={brand.logo}
              alt={brand.name}
              width={80}
              height={80}
              className="object-contain w-full h-full block drop-shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
