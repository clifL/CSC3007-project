// Read from CSV
// csv_path = "Clean_DeathByMonthAndAge.csv"
// var csv_data = $.csv.toObjects(csv_path)
// console.log(csv_data)

// Parition csv dataset into nine age group and one date range array
var date_range = [];
var age_0_19 = [];
var age_20_29 = [];
var age_30_39 = [];
var age_40_49 = [];
var age_50_59 = [];
var age_60_69 = [];
var age_70_79 = [];
var age_80_above = [];
let ctx = document.getElementById("deathRateChart").getContext("2d");
var multiLineChart = "";

function GenerateChart() {
    Promise.all([d3.csv("Clean_DeathByMonthAndAge.csv")]).then((data) => {
        for (let i = 0; i < data[0].length; i++) {
            date_range.push(data[0][i]["str_date"]);
            age_0_19.push(
                Math.round(data[0][i]["0-12"]) + Math.round(data[0][i]["13-19"])
            );
            age_20_29.push(Math.round(data[0][i]["20-29"]));
            age_30_39.push(Math.round(data[0][i]["30-39"]));
            age_40_49.push(Math.round(data[0][i]["40-49"]));
            age_50_59.push(Math.round(data[0][i]["50-59"]));
            age_60_69.push(Math.round(data[0][i]["60-69"]));
            age_70_79.push(Math.round(data[0][i]["70-79"]));
            age_80_above.push(Math.round(data[0][i]["80+"]));
        }

        const chartData = {
            labels: date_range,
            datasets: [{
                label: "Age (0 - 19)",
                data: age_0_19,
                backgroundColor: "#637d8a",
                borderColor: "#637d8a",
                fill: false,
                datalabels: {
                    display: false,
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
                label: "Age (20 - 29)",
                data: age_20_29,
                backgroundColor: "#A27E5D",
                borderColor: "#A27E5D",
                fill: false,
                datalabels: {
                    display: false,
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
                label: "Age 30 - 39",
                data: age_30_39,
                backgroundColor: "#a05195",
                borderColor: "#a05195",
                fill: false,
                datalabels: {
                    display: false,
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
                label: "Age 40 - 49",
                data: age_40_49,
                backgroundColor: "#ECCF1C",
                borderColor: "#ECCF1C",
                fill: false,
                datalabels: {
                    display: false,
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
                label: "Age 50 - 59",
                data: age_50_59,
                backgroundColor: "#8576a4",
                borderColor: "#8576a4",
                fill: false,
                datalabels: {
                    display: function (context) {
                        return context.dataIndex >= 22;
                    },
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
                label: "Age 60 - 69",
                data: age_60_69,
                backgroundColor: "#e3e847",
                borderColor: "#e3e847",
                fill: false,
                datalabels: {
                    display: function (context) {
                        return context.dataIndex >= 21;
                    },
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
                label: "Age 70 - 79",
                data: age_70_79,
                backgroundColor: "#c16329",
                borderColor: "#c16329",
                fill: false,
                datalabels: {
                    display: function (context) {
                        return context.dataIndex >= 21;
                    },
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
            },
            {
                label: "Age 80+",
                data: age_80_above,
                backgroundColor: "#ff0b00",
                borderColor: "#ff0b00",
                fill: false,
                datalabels: {
                    color: "white",
                    borderWidth: 7,
                    borderRadius: 2,
                    backgroundColor: "#ff0b00",
                    font: {
                        weight: "bold",
                    },
                    offset: 0,
                    anchor: "end",
                    align: "center",
                    display: function (context) {
                        return context.dataIndex >= 20;
                    },
                    

                },
            },
            ],
        };

        const totalDuration = 400;
        const delayBetweenPoints = totalDuration / data.length;
        const previousY = (ctx) =>
            ctx.index === 0 ?
                ctx.chart.scales.y.getPixelForValue(100) :
                ctx.chart
                    .getDatasetMeta(ctx.datasetIndex)
                    .data[ctx.index - 1].getProps(["y"], true).y;
        const animation = {
            x: {
                type: "number",
                easing: "linear",
                duration: delayBetweenPoints,
                from: NaN, // the point is initially skipped
                delay(ctx) {
                    if (ctx.type !== "data" || ctx.xStarted) {
                        return 0;
                    }
                    ctx.xStarted = true;
                    return ctx.index * delayBetweenPoints;
                },
            },
            y: {
                type: "number",
                easing: "linear",
                duration: delayBetweenPoints,
                from: previousY,
                delay(ctx) {
                    if (ctx.type !== "data" || ctx.yStarted) {
                        return 0;
                    }
                    ctx.yStarted = true;
                    return ctx.index * delayBetweenPoints;
                },
            },
        };

        multiLineChart = new Chart(ctx, {
            type: "line",
            data: chartData,
            plugins: [ChartDataLabels],
            options: {
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: "Accumulated Death",
                        }
                    },
                },
                animation,
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
                        text: "Covid-19 Accumulated Deaths by Age Group in Singapore",
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