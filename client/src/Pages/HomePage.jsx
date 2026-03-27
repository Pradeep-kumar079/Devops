import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ProductGrid from "../Components/ProductGrid";
import Footer from "../Components/Footer";
import Category from "../Components/Category";

function HomePage() {


  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <ProductGrid />
      <Footer />
    </>
  );
}

export default HomePage;