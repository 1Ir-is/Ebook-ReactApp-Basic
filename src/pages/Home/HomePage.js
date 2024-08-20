import { Hero } from "./components/Hero";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { useTitle } from "../../hooks";

export const HomePage = () => {
  useTitle("Access Lastest Computer Science eBooks");
  return (
    <main>
        <Hero />
        <FeaturedProduct />
        <Testimonials />
        <Faq />
    </main>
  )
}
