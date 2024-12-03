import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { PopChart } from '../../types/info';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const PopulationChart = ({ data }: { data: PopChart[] }) => {
  const chartData = {
    labels: data.map((item) => item.year),
    datasets: [
      {
        label: 'Population',
        data: data.map((item) => item.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.2,
      },
    ],
  };

  // Grapg settings
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Years',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Population',
        },
        reverse: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};
