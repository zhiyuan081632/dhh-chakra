import Contact from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Statistics from "@/components/statistics";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Statistics />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}