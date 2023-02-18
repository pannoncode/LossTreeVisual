import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const BarChart = ({ barData }) => {
  return <Bar data={barData} />;
};

export default BarChart;
