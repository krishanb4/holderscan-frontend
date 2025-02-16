import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);
interface TokenChartProps {
  data: number[];
  isPositive: boolean;
}
export const TokenChart = ({ data, isPositive }: TokenChartProps) => {
  const chartData = {
    labels: Array(data.length).fill(""),
    datasets: [
      {
        data,
        fill: true,
        tension: 0.4,
        borderColor: isPositive ? "#4ade80" : "#f87171",
        borderWidth: 2,
        backgroundColor: (context: {
          chart: { ctx: CanvasRenderingContext2D };
        }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 100);
          if (isPositive) {
            gradient.addColorStop(0, "rgba(74, 222, 128, 0.2)");
            gradient.addColorStop(1, "rgba(74, 222, 128, 0)");
          } else {
            gradient.addColorStop(0, "rgba(248, 113, 113, 0.2)");
            gradient.addColorStop(1, "rgba(248, 113, 113, 0)");
          }
          return gradient;
        },
        pointRadius: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="h-24 w-full mt-4">
      <Line data={chartData} options={options} />
    </div>
  );
};
