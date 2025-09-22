import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ price }) => {
  console.log(price);
  return (
    <div className="flex flex-col border bg-amber-600 rounded-2xl p-4">
      {/* CardHeader */}
      <div>
        <h1 className="text-7xl">{price.name}</h1>
        <h4 className="text-3xl">{price.price}</h4>
      </div>

      {/* CardBody */}
      <div className="bg-amber-400 p-4 rounded-2xl mt-5 flex-1">
        <p>{price.description}</p>
        {price.features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;
