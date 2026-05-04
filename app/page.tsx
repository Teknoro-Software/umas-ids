import About from "@/components/home/About";
import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Services />
      <About />
      <Process />
      {/* <Testimonials /> */}
    </>
  );
}