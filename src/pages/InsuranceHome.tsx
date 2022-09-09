import React from "react";
import Header from "../components/header/Header";
import HeroImage from "../components/heroImageSection/HeroImage";
import PolicyTable from "../components/policyTable/PolicyTable";
import QuoteButtons from "../components/quoteButtons/QuoteButtons";

const InsuranceHome = () => {
  return (
    <>
      <Header></Header>
      <HeroImage></HeroImage>
      <PolicyTable></PolicyTable>
      <QuoteButtons></QuoteButtons>
    </>
  );
};

export default InsuranceHome;
