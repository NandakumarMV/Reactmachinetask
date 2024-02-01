import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getPieData } from "../axiosCalls";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  const [graphData, setGraphData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await getPieData();
      console.log(response);
      setGraphData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!graphData) {
    return null;
  }

  const chartData = {
    labels: graphData.map((entry) => entry.label),
    datasets: [
      {
        data: graphData.map((entry) => entry.value),
        backgroundColor: [
          "#69DF89",
          "#38BD5C",
          "#3DF461",
          "#D4F9DB",
          "#22C842",
        ],
        hoverBackgroundColor: ["#74FF00"],
      },
    ],
  };
  const width = 50;
  const chartOptions = {
    layout: {
      padding: {
        top: 2, // Adjust for desired top spacing
        bottom: 0, // Adjust for desired bottom spacing
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
    responsive: true, // Allow responsiveness
  };

  return (
    <div className="drop-shadow-xl rounded-lg bg-white p-3">
      <Pie className="  h-32 p-2" data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChartComponent;
