import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricingCard from "../DaisyPricingCard/DaisyPricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  console.log(pricingData);

  return (
    <div>
      <h2 className="text-5xl font-bold">Get Our Membership</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {pricingData.map((price) => (
          <PricingCard key={price.id} price={price}></PricingCard>
        ))} */}
        {pricingData.map((price) => (
          <DaisyPricingCard key={price.id} price={price}></DaisyPricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
