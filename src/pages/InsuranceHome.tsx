import React from "react";
import Header from "../components/header/Header";
import HeroImage from "../components/heroImageSection/HeroImage";
import PolicyTable from "../components/policyTable/PolicyTable";
import Footer from "../components/footer/Footer";

const InsuranceHome = () => {
  return (
    <>
      <Header></Header>
      <HeroImage></HeroImage>
      <PolicyTable></PolicyTable>
      <Footer></Footer>
    </>
  );
};

export default InsuranceHome;
