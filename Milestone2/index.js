// Dataset
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 3, 4, 5, 6, 7],
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: [10, 2, 3, 4, 5, 6, 11],
      yAxisID: "y1",
    },
  ],
};

// Style Configurations
const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Multi Axis",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  },
};

// Plotting
let myChart = document.getElementById("myChart").getContext("2d");
let multiLineChart = new Chart(
  myChart,
  {
    type: "line",
    data: data,
  },
  config
);
