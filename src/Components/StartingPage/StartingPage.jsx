import React from "react";
import Banner from "../Banner/Banner";
import StateSection from "../StateSection/StateSection";
import { useLoaderData } from "react-router";
import TrendingApps from "../Apps/TrendingApps";

const StartingPage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Banner></Banner>
      <StateSection></StateSection>
      <TrendingApps data={data}></TrendingApps>
    </>
  );
};

export default StartingPage;
