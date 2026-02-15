import BestSellers from "@/components/BestSellers";
import BrandStatement from "@/components/CTASection";
import FeaturedCategories from "@/components/FeaturedCategories";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import SaleBanner from "@/components/SaleBanner";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Hero />
      

      <FeaturedCategories/>

      <BestSellers/>

      <WhyChoose/>

      <SaleBanner/>

      <HappyCustomers/>

<BrandStatement/>
    </main>
  );
}
