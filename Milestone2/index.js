// Dataset
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Age 10 - 18",
      data: [1, 2, 3, 4, 5, 6, 7],
      borderColor: "#c2ff68",

      //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: "Age 19 - 30",
      data: [8, 2, 3, 4, 5, 6, 11],
      borderColor: "#e04a59",
      //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
    {
      label: "Age 31 - 50",
      data: [15, 8, 3, 4, 5, 6, 11],
      borderColor: "#006ea2",
      //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
    {
      label: "Age 51 - 70",
      data: [1, 2, 3, 13, 5, 6, 11],
      borderColor: "#7d6277",
      //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
  ],
};

// Style Configurations
const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
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
