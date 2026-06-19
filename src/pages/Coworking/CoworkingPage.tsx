import CoworkingHero from "./CoworkingHero";
import CoworkingAboutSection from "./CoworkingAboutSection";
import CoworkingSpacesSection from "./CoworkingSpacesSection";
import CoworkingGallerySection from "./CoworkingGallerySection";
import CoworkingRewardsSection from "./CoworkingRewardsSection";

export default function CoworkingPage() {
  return (
    <>
      <CoworkingHero />
      <CoworkingAboutSection />
      <CoworkingSpacesSection />
      <CoworkingRewardsSection />
      <CoworkingGallerySection />
    </>
  );
}