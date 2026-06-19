import Hero from "./sections/Hero";
import Services from "./sections/Services";
import PointsProgram from "./sections/PointsProgram";
import Membership from "./sections/Membership";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PointsProgram />
      <Membership />
      <Testimonials />
      <CTA />
    </>
  );
}