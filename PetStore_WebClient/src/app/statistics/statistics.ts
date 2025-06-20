import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: false,
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss'
})
export class Statistics {
  public chartData = [112, 10, 225, 134, 101, 80, 50, 100, 200];
  public labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  public tooltipContent = '';
  public tooltipOpen = false;
  public tooltipX = 0;
  public tooltipY = 0;

}
