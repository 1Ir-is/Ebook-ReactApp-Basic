import { Hero } from "./components/Hero";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { ProductCard } from "../../components/Elements/ProductCard";

export const HomePage = () => {
  return (
    <main>
        <Hero />
        <FeaturedProduct />
        <ProductCard />
    </main>
  )
}
