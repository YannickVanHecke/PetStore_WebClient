import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";
export class ChartOptions {
  title: ApexTitleSubtitle;
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;


  /**
   *
   */
  constructor(
    title: ApexTitleSubtitle,
    series: ApexAxisChartSeries,
    chart: ApexChart,
    plotOptions: ApexPlotOptions,
    dataLabels: ApexDataLabels,
    xaxis: ApexXAxis,
    yaxis: ApexYAxis,
    fill: ApexFill
  ) {
    this.title = title;
    this.series = series;
    this.chart = chart;
    this.plotOptions = plotOptions;
    this.dataLabels = dataLabels;
    this.xaxis = xaxis;
    this.yaxis = yaxis;
    this.fill = fill;
  }
};