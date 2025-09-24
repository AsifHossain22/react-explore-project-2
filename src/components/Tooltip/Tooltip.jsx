import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const TooltipPractice = () => {
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          activeShape={{
            fill: "green",
          }}
          data={[
            { name: "Grapes", collection: 20 },
            { name: "Orange", collection: 30 },
            { name: "Banana", collection: 50 },
          ]}
          dataKey="collection"
        />
        <Tooltip defaultIndex={2} />
      </PieChart>
    </div>
  );
};

export default TooltipPractice;
