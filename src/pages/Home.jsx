import Banner from "../components/Banner";
import Hero from "../components/Hero";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner1 from "../images/banner/scoot-backpack.png";

function Home() {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="SCOOT BACKPACK"
        text="A trendy backpack with space for all your essentials, made from durable Tarpaulin with adjustable leather straps."
        img={Banner1}
      />
      <TrendingSlider />
    </>
  );
}

export default Home;
