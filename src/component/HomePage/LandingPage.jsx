import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="h-screen w-full relative">
      <Image
        src="/HomePage/Banner.svg"
        alt="Homepage Banner"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default LandingPage;
