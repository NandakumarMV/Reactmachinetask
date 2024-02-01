import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { getGraphData } from "../axiosCalls";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const GraphComponent = () => {
  const [graphData, setGraphData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await getGraphData();
      console.log(response);
      setGraphData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const datasetValues = graphData ? graphData.map((entry) => entry.y) : [];
  const labels = graphData ? graphData.map((entry) => entry.x) : [];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: datasetValues,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75,192,192)",
        pointBorderColor: "rgb(75,192,192)",
        pointBorderwidth: 4,
        tension: 0.3,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      Legend: false,
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        min: 0,
        max: 20,
        ticks: {
          stepSize: 5,
          callback: (value) => value,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };
  return (
    <div className="   drop-shadow-xl rounded-lg bg-white">
      <Line
        className=" h-[16rem] w-[58rem] p-2"
        data={data}
        options={options}
      ></Line>
    </div>
  );
};

export default GraphComponent;
