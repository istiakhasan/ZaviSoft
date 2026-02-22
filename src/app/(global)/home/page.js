import Banner from "../../../components/Banner";
import CategoriesSection from "../../../components/CategoriesSection";
import ProductsSection from "../../../components/ProductsSection";
import ReviewSection from "../../../components/ReviewSection";


export default function Home() {
  return (

    <div className="md:mx-[60px] mx-[16px]">
      <Banner />
      <ProductsSection />
      <CategoriesSection />
      <ReviewSection />
    </div>
  );
}
