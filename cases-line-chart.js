let y_data_1 = [];
let y_data_2 = [];
let y_data_3 = [];
let y_data_4 = [];
let y_data_5 = [];
let y_data_6 = [];
let y_data_7 = [];
let ctxa = document.getElementById("cases-line-chart").getContext("2d");
var multiLineChart = "";

function GenerateChart() {
    Promise.all([d3.csv("covid-19-case-numbers/number-of-local-cases-by-age.csv")]).then((data) => {
        // for (let i = 0; i < data[0].length; i++) {
        //     date_range.push(data[0][i]["str_date"]);
        //     age_0_19.push(
        //         Math.round(data[0][i]["0-12"]) + Math.round(data[0][i]["13-19"])
        //     );
        //     age_20_29.push(Math.round(data[0][i]["20-29"]));
        //     age_30_39.push(Math.round(data[0][i]["30-39"]));
        //     age_40_49.push(Math.round(data[0][i]["40-49"]));
        //     age_50_59.push(Math.round(data[0][i]["50-59"]));
        //     age_60_69.push(Math.round(data[0][i]["60-69"]));
        //     age_70_79.push(Math.round(data[0][i]["70-79"]));
        //     age_80_above.push(Math.round(data[0][i]["80+"]));
        // }

        data[0].forEach(e => {
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
        const labels = ["2022-06-09", "2022-06-10", "2022-06-11", "2022-06-12", "2022-06-13", "2022-06-14", "2022-06-15", "2022-06-16", "2022-06-17", "2022-06-18", "2022-06-19", "2022-06-20", "2022-06-21", "2022-06-22", "2022-06-23", "2022-06-24", "2022-06-25", "2022-06-26", "2022-06-27", "2022-06-28", "2022-06-29", "2022-06-30", "2022-07-01", "2022-07-02", "2022-07-03", "2022-07-04", "2022-07-05", "2022-07-06"];
        const chartData = {
            labels: labels,
            datasets: [{
                label: "Age (0 - 11)",
                data: y_data_1,
                backgroundColor: "#637d8a",
                borderColor: "#637d8a",
                fill: false,
                datalabels: {
                    display: 'auto',
                    color: "white",
                    borderWidth: 7,
                    borderRadius: 2,
                    backgroundColor: "#637d8a",
                    font: {
                        weight: "bold",
                    },
                    offset: 0,
                    anchor: "end",
                    align: "top",
                },
            },
            {
                label: "Age (12 - 19)",
                data: y_data_2,
                backgroundColor: "#A27E5D",
                borderColor: "#A27E5D",
                fill: false,
                datalabels: {
                    display: 'auto',
                    color: "white",
                    borderWidth: 7,
                    borderRadius: 2,
                    backgroundColor: "#A27E5D",
                    font: {
                        weight: "bold",
                    },
                    offset: 0,
                    anchor: "end",
                    align: "top",
                },
            },
            {
                label: "Age 20 - 39",
                data: y_data_3,
                backgroundColor: "#a05195",
                borderColor: "#a05195",
                fill: false,
                datalabels: {
                    display: 'auto',
                    color: "white",
                    borderWidth: 7,
                    borderRadius: 2,
                    backgroundColor: "#a05195",
                    font: {
                        weight: "bold",
                    },
                    offset: 0,
                    anchor: "end",
                    align: "top",
                },
            },
            {
                label: "Age 40 - 59",
                data: y_data_4,
                backgroundColor: "#ECCF1C",
                borderColor: "#ECCF1C",
                fill: false,
                datalabels: {
                    display: 'auto',
                    color: "white",
                    borderWidth: 7,
                    borderRadius: 2,
                    backgroundColor: "#ECCF1C",
                    font: {
                        weight: "bold",
                    },
                    offset: 0,
                    anchor: "end",
                    align: "top",
                },
            },
            {
                label: "Age 60 - 69",
                data: y_data_5,
                backgroundColor: "#8576a4",
                borderColor: "#8576a4",
                fill: false,
                datalabels: {
                    // display: function (context) {
                    //     return context.dataIndex >= 22;
                    // },
                    display: 'auto',
                    color: "white",
                    borderWidth: 7,
                    borderRadius: 2,
                    backgroundColor: "#8576a4",
                    font: {
                        weight: "bold",
                    },
                    offset: 0,
                    anchor: "end",
                    align: "center",
                },
            },
            {
                label: "Age 70 and above",
                data: y_data_6,
                backgroundColor: "#e3e847",
                borderColor: "#e3e847",
                fill: false,
                datalabels: {
                    // display: function (context) {
                    //     return context.dataIndex >= 21;
                    // },
                    // display: true,
                    display: 'auto',
                    color: "white",
                    borderWidth: 7,
                    borderRadius: 2,
                    backgroundColor: "#c0c447",
                    font: {
                        weight: "bold",
                    },
                    offset: 0,
                    anchor: "end",
                    align: "center",
                },
            },
            {
                label: "Total",
                data: y_data_7,
                backgroundColor: "#c16329",
                borderColor: "#c16329",
                fill: false,
                datalabels: {
                    // display: function (context) {
                    //     return context.dataIndex >= 21;
                    // },
                    display: 'auto',
                    color: "white",
                    borderWidth: 7,
                    borderRadius: 2,
                    backgroundColor: "#c16329",
                    font: {
                        weight: "bold",
                    },
                    offset: 0,
                    anchor: "end",
                    align: "center",
                },
            }
            ],
        };

        // const totalDuration = 400;
        // const delayBetweenPoints = totalDuration / data.length;
        // const previousY = (ctxa) =>
        //     ctxa.index === 0 ?
        //         ctxa.chart.scales.y.getPixelForValue(100) :
        //         ctxa.chart
        //             .getDatasetMeta(ctxa.datasetIndex)
        //             .data[ctxa.index - 1].getProps(["y"], true).y;
        // const animation = {
        //     x: {
        //         type: "number",
        //         easing: "linear",
        //         duration: delayBetweenPoints,
        //         from: NaN, // the point is initially skipped
        //         delay(ctxa) {
        //             if (ctxa.type !== "data" || ctxa.xStarted) {
        //                 return 0;
        //             }
        //             ctxa.xStarted = true;
        //             return ctx.index * delayBetweenPoints;
        //         },
        //     },
        //     y: {
        //         type: "number",
        //         easing: "linear",
        //         duration: delayBetweenPoints,
        //         from: previousY,
        //         delay(ctxa) {
        //             if (ctxa.type !== "data" || ctx.yStarted) {
        //                 return 0;
        //             }
        //             ctxa.yStarted = true;
        //             return ctxa.index * delayBetweenPoints;
        //         },
        //     },
        // };

        

        multiLineChart = new Chart(ctxa, {
            type: "line",
            data: chartData,
            plugins: [ChartDataLabels],
            options: {
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: "Number of Cases",
                        }
                    },
                },
                // animation,
                interaction: {
                    intersect: false,
                },

                // responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        titleColor: "rgb(0,0,0)",
                        bodyColor: "rgb(0,0,0)",
                        backgroundColor: "rgb(225,226,225)",
                    },
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "Covid-19 Cases in Singapore",
                        font: {
                            size: 20,
                        },
                    },
                },
            },
        });
    });
}

function Replay() {
    multiLineChart.destroy();
    date_range = [];
    age_0_19 = [];
    age_20_29 = [];
    age_30_39 = [];
    age_40_49 = [];
    age_50_59 = [];
    age_60_69 = [];
    age_70_79 = [];
    age_80_above = [];
    GenerateChart();
}

function Pause() {
    multiLineChart.stop();
}

function Resume() {
    multiLineChart.update();
}

GenerateChart();