import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Ticks,
} from "chart.js";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarGraph() {
  const [booksData, setBooksData] = useState(null);

  const labels = [
    "Mystery",
    "Literary Fiction",
    "Historical Fiction",
    "Contemporary Fiction",
    "Biography",
    "Memoir",
    "Self-Help",
    "Health & Wellness",
  ];

  useEffect(() => {
    async function getGraphData() {
      try {
        const res = await axios.get("http://localhost:8080/books/graph");
        const { send } = res.data;
        setBooksData(send);
      } catch (err) {
        console.log(err);
        toast.error("Sorry, could not get the graph data");
      }
    }
    getGraphData();
  }, []);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
      },
      x: {
        border: {
          color: "white",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        data: booksData,
        backgroundColor: [
          "#ffc300",
          "#ffc300",
          "#ffc300",
          "#ffc300",
          "#ffc300",
          "#ffc300",
          "#ffc300",
          "#ffc300",
        ],
        borderColor: ["#ffc300"],
      },
    ],
  };

  return (
    <>{booksData ? <Bar options={options} data={data} /> : <h1>Loading</h1>}</>
  );
}

export default BarGraph;
