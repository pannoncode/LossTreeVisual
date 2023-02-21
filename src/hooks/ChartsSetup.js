const useChartsSetup = () => {
  const barChartForSorterData = (barData, label) => {
    const data = {
      labels: barData.map((data) => data.Unplanned),
      datasets: [
        {
          label,
          data: barData.map((data) =>
            parseFloat(data.OeeLoss * 100).toFixed(2)
          ),
        },
      ],
    };
    return data;
  };

  const createBarChart = (barData, label) => {
    const data = {
      labels: barData.map((data) => data.Unplanned),
      datasets: [
        {
          label,
          data: barData.map((data) => data.Stops),
        },
      ],
    };

    return data;
  };

  const createPieChart = (pieData, label) => {
    const data = {
      labels: pieData.map((data) => data.Unplanned),
      datasets: [
        {
          label,
          data: pieData.map((data) =>
            parseFloat(data?.OeeLoss * 100).toFixed(2)
          ),
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(116, 235, 52)",
            "rgb(83, 114, 207)",
            "rgb(84, 18, 44)",
            "rgb(84, 18, 44)",
            "rgb(118, 48, 179)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    return data;
  };

  return { barChartForSorterData, createBarChart, createPieChart };
};

export default useChartsSetup;
