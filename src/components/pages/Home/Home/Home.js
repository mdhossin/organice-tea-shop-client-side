import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";
import Banner from "../Banner/Banner/Banner";
import BestSellerProducts from "../BestSeller/BestSeller/BestSellerProducts";
import FeaturedItems from "../FeaturedItems/FeaturedItems/FeaturedItems";
import GreenTeaBanner from "../GreenTeaBanner/GreenTeaBanner/GreenTeaBanner";
import ImageShowCase from "../ImageShowCase/ImageShowCase/ImageShowCase";
import MatchaTeaBanner from "../MatchaTeaBanner/MatchaTeaBanner/MatchaTeaBanner";
import NewArrivalsProducts from "../NewArrivalsProducts/NewArrivalsProducts/NewArrivalsProducts";
import ShowCaseTea from "../ShowCaseTea/ShowCaseTea/ShowCaseTea";
import SubscribeArea from "../SubscribeArea/SubscribeArea";
import Testimonials from "../Testimonials/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ShowCaseTea></ShowCaseTea>
      <FeaturedItems></FeaturedItems>
      <MatchaTeaBanner></MatchaTeaBanner>
      <BestSellerProducts></BestSellerProducts>
      <GreenTeaBanner></GreenTeaBanner>
      <NewArrivalsProducts></NewArrivalsProducts>
      <Testimonials></Testimonials>
      <ImageShowCase />
      <SubscribeArea></SubscribeArea>
      <Footer></Footer>
    </div>
  );
};

export default Home;
