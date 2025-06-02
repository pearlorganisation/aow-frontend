import FindEventProductPannel from "@/component/HomePage/FindEventProductPannel/FindEventProductPannel";
import LandingPage from "@/component/HomePage/LandingPage";
import TrendingPage from "@/component/HomePage/TrendingEvents/TrendingPage";
import Navbar from "@/component/Layout/Navbar";

const page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <LandingPage />
      <FindEventProductPannel />
      <TrendingPage />
    </div>
  );
};

export default page;
