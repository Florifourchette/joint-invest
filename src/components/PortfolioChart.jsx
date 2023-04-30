import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const PortfolioChart = ({ hourlyValues }) => {
  const labels = ["-8", "-7", "-6", "-5", "-4", "-3", "-2", "-1"];
  console.log(hourlyValues);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total value in the past hours",
        data: hourlyValues,
        fill: true,
        borderColor: "rgb(0, 0, 255)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <div className="chart-container">
        <Line
          data={data}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default PortfolioChart;
