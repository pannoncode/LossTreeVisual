import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const PieChart = ({ pieData }) => {
  return <Pie data={pieData} />;
};

export default PieChart;
