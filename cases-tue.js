// Dataset
const DATA_COUNT = 8;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

Promise.all([d3.csv("covid-19-case-numbers/number-of-local-cases-by-tue.csv")]).then(data1 => {

  console.log(data1[0]);
  let g_0 = []
  let g_1 = []
  let y_data = []
  let y_data_1 = []
  let y_data_2 = []
  let y_data_3 = []
  let y_data_4 = []
  let y_data_5 = []
  let y_data_6 = []
  let y_data_7 = []
  let y_data_8 = []

  // Data preprocessing
  data1[0].forEach(e => {
      // e.source = e.infector;
      // e.target = e.infectee;
      // console.log(e.age_group)
      if (e.age_group == '0 - 11 years old'){
        y_data_1.push(e.count_of_case);
      }
      if (e.age_group == '12 - 19 years old'){
        y_data_2.push(e.count_of_case);
      }
      if (e.age_group == '20 - 39 years old'){
        y_data_3.push(e.count_of_case);
      }
      if (e.age_group == '40 - 59 years old'){
        y_data_4.push(e.count_of_case);
      }
      if (e.age_group == '50 - 69 years old'){
        y_data_5.push(e.count_of_case);
      }
      if (e.age_group == '70 years old and above'){
        y_data_6.push(e.count_of_case);
      }
      if (e.age_group == 'total'){
        y_data_7.push(e.count_of_case);
      }
      // console.log(y_data_1)
  });

  

  // for (let i=0; i<28; i++){
  //   for (let j=0; j<8; j++){
  //     y_data[i][j] = data1[0][0]["count_of_case"];
  //     console.log(data1[0][0]["count_of_case"]);
  //   }
  // };



const labels = ["2022-06-14", "2022-06-21", "2022-06-28", "2022-07-05"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Age 0 to 11",
      data:  y_data_1,
      borderColor: "#c2ff68",

      //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: "Age 12 to 19",
      data:  y_data_2,
      borderColor: "#e04a59",
      //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
    {
      label: "Age 20 to 39",
      data:  y_data_3,
      borderColor: "#006ea2",
      //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
    {
      label: "Age 40 to 59",
      data:  y_data_4,
      borderColor: "#7d6277",
      //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
    {
      label: "Age 60 to 69",
      data: y_data_5,
      borderColor: "#7d6277",
      //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
    {
      label: "Age 70 and above",
      data:  y_data_6,
      borderColor: "#7d6277",
      //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    },
    {
      label: "Total",
      data:  y_data_7,
      borderColor: "#eeee00",
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
})
