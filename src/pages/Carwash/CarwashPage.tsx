import CarwashHero from "./CarwashHero";
import ServicesSection from "./ServicesSection";
import ProcessSection from "./ProcessSection";
import BenefitsSection from "./BenefitsSection";
import TrustSection from "./TrustSection";
import BookingForm from "./BookingForm";

export default function CarwashPage() {
  return (
    <>
      <CarwashHero />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <TrustSection />
      <BookingForm />
    </>
  );
}