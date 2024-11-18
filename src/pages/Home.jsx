import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";


const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "Macbook"
  );
  const bestSales = products.filter((item) => item.category === "iphone");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Section
        title="PRODUCT DISCOUNT FASTIVAL"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Section
        title="NEW ARRIVALS PRODUCTS "
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="BEST SALE PRODUCTS" bgColor="#f6f9fc" productItems={bestSales} />
      <Wrapper />
    </Fragment>
    
  );
};

export default Home;
