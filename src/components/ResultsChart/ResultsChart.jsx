import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "Alice", physics: 85, chemistry: 78, math: 92 },
  { id: 2, name: "Bob", physics: 72, chemistry: 65, math: 70 },
  { id: 3, name: "Charlie", physics: 90, chemistry: 88, math: 95 },
  { id: 4, name: "Diana", physics: 66, chemistry: 74, math: 69 },
  { id: 5, name: "Ethan", physics: 78, chemistry: 82, math: 80 },
  { id: 6, name: "Fiona", physics: 92, chemistry: 89, math: 94 },
  { id: 7, name: "George", physics: 59, chemistry: 62, math: 55 },
  { id: 8, name: "Hannah", physics: 81, chemistry: 79, math: 85 },
  { id: 9, name: "Ian", physics: 74, chemistry: 71, math: 76 },
  { id: 10, name: "Julia", physics: 88, chemistry: 91, math: 90 },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={300} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" />
        <Line dataKey={"chemistry"} stroke="red" />
      </LineChart>
    </div>
  );
};

export default ResultsChart;
