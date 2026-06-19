import CafeteriaHero from "./CafeteriaHero";
import CafeteriaAboutSection from "./CafeteriaAboutSection";
import CafeteriaMenuSection from "./CafeteriaMenuSection";
import CafeteriaGallerySection from "./CafeteriaGallerySection";
import CafeteriaRewardsSection from "./CafeteriaRewardsSection";

export default function CafeteriaPage() {
  return (
    <>
      <CafeteriaHero />
      <CafeteriaAboutSection />
      <CafeteriaMenuSection />
      <CafeteriaRewardsSection />
      <CafeteriaGallerySection />
    </>
  );
}