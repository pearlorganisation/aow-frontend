import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Responsive height for different screens */}
      <div className="relative w-full h-[90px] sm:h-[150px] md:h-[200px] lg:h-[260px] xl:h-[290px] 2xl:h-[300px]">
        <Image
          src="/car.png"
          alt="World of Car & Motorcycling"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </div>
  );
}
