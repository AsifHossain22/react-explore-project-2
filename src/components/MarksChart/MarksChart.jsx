import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  //   Data Processing for the Marks Chart
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.subjects.physics,
      chemistry: studentData.subjects.chemistry,
      math: studentData.subjects.math,
    };

    const averageMarks =
      (student.physics + student.chemistry + student.math) / 3;
    student.averageMarks = averageMarks;

    return student;
  });

  console.log(marksChartData);

  return (
    <div>
      <BarChart width={500} height={300} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="averageMarks" fill="yellow"></Bar>
        <Bar dataKey="chemistry" fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
