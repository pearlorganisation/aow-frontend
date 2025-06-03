import BikeBrandLogos from "@/component/HomePage/bikeBrandLogos/BikeBrandLogos";
import CarImageSection from "@/component/HomePage/carImageSection/CarImageSection";
import FindEventProductPannel from "@/component/HomePage/FindEventProductPannel/FindEventProductPannel";
import LandingPage from "@/component/HomePage/LandingPage";
import PopularBrands from "@/component/HomePage/popularBrands/PopularBrands";
import TrendingPage from "@/component/HomePage/TrendingEvents/TrendingPage";
import Navbar from "@/component/Layout/Navbar";

const page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <LandingPage />
      <FindEventProductPannel />
      <PopularBrands/>
      <CarImageSection/>
      <BikeBrandLogos/>
      <TrendingPage />
    </div>
  );
};

export default page;
