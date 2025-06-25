import { Component } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';
import { ChartOptions } from '../../model/chart/chartoptions';
import { ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-statistics',
  standalone: false,
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss'
})
export class Statistics {
  public chartOptions: Partial<ChartOptions> | undefined;

  constructor(private statisticsService: StatisticsService) {
    this.statisticsService.GetStatistics().subscribe({
      next: (result) => { this.processResultToDiagram(result); },
      error: (error) => { this.showError(error); },
      complete: () => { console.log("complete"); }
    });
  }
  private processResultToDiagram(result: ChartOptions) {
    console.log(result);
    this.showChart(result.series, result.xaxis);
  }

  private showError(error: any) {
    console.log(error);
    this.chartOptions = {
      series: [
        {
          name: "Inflation",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }

  private showChart(series: ApexAxisChartSeries, categories: ApexXAxis) {
    console.log(series);
    console.log(categories);
    this.chartOptions = {
      series: series,
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (value) {
          return value;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: categories,
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        }},
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function (val: any) {
              return val + "%";
            }
          }
        },
        title: {
          text: "Monthly Inflation in Argentina, 2002",
          offsetY: 320,
          align: "center",
          style: {
            color: "#444"
          }
        }
      };
    }


  }