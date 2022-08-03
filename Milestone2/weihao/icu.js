

Promise.all([d3.csv("covid-19-case-numbers/icu-count.csv")]).then(data1 => {

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
      if (e.status == 'boost'){
        y_data_1.push(e.count);
      }
      if (e.status == 'unboost'){
        y_data_2.push(e.count);
      }
      if (e.status == 'no'){
        y_data_3.push(e.count);
      }
  });



  // for (let i=0; i<28; i++){
  //   for (let j=0; j<8; j++){
  //     y_data[i][j] = data1[0][0]["count_of_case"];
  //     console.log(data1[0][0]["count_of_case"]);
  //   }
  // };



const labels = ["Vaccinated with Booster", "Vaccinated without Booster", "Not Vaccinated"];
const data = {
  labels:labels,
  datasets: [{
    label: 'My First Dataset',
    data: [y_data_1, y_data_2, y_data_3],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

// Style Configurations
const config = {
  type: "pie",
  data: data,
  options: {
    responsive: false,
    maintainAspectRatio: false,
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
let myChart = document.getElementById("icu").getContext("2d");
let multiLineChart = new Chart(
  myChart,
  {
    type: "pie",
    data: data,
  },
    
);
})
