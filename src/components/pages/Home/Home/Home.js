import React from "react";
import NewArrivalsProducts from "../../NewArrivalsProducts/NewArrivalsProducts/NewArrivalsProducts";
import SubscribeArea from "../../SubscribeArea/SubscribeArea";
import Testimonials from "../../Testimonials/Testimonials/Testimonials";
import Banner from "../Banner/Banner/Banner";
import BestSellerProducts from "../BestSeller/BestSeller/BestSellerProducts";
import FeaturedItems from "../FeaturedItems/FeaturedItems/FeaturedItems";
import GreenTeaBanner from "../GreenTeaBanner/GreenTeaBanner/GreenTeaBanner";
import MatchaTeaBanner from "../MatchaTeaBanner/MatchaTeaBanner/MatchaTeaBanner";
import ShowCaseTea from "../ShowCaseTea/ShowCaseTea/ShowCaseTea";

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
      <SubscribeArea></SubscribeArea>
    </div>
  );
};

export default Home;
