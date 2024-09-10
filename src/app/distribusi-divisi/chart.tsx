"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Chart() {
  return (
    <div className="flex justify-center items-center w-screen mt-10">
      <div className="w-1/2 h-72">
        <Bar
          data={{
            labels: ["Divisi 1", "Divisi 2", "Divisi 3", "Divisi 4", "Divisi 5"],
            datasets: [
              {
                label: "Jumlah Karyawan",
                data: [12, 19, 3, 5, 1],
                backgroundColor: ["red", "orange", "yellow", "green", "blue"],
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
                borderRadius: 5,
                borderSkipped: false,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
