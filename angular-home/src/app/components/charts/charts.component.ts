import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  chartData: any;
  chartdata2: any;
  chartData3: any;
  constructor(private timelineService: TimelineService) {}

  ngOnInit() {
    this.fetchChartData();
  }

  fetchChartData() {
    this.timelineService.getchartdata().subscribe(
      (data: any) => {
        this.chartData = data;
        this.renderChart();
        
      },
      (error) => {
        console.error('Error fetching COVID-19 data:', error);
      }
    );

    this.timelineService.getCovidData().subscribe(
      (data:any)=>{
        this.chartdata2=data
        this.renderChart2()
        
      },
      (error)=>{
          console.log('error',error);
          
      }
    )
  }

  renderChart() {
    const dates = Object.keys(this.chartData.cases);
    const cases = Object.values(this.chartData.cases);
  
    const ctx = document.getElementById('myChart2') as HTMLCanvasElement;
    
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'COVID-19 Cases',
          data: cases,
          borderColor: 'rgb(75, 192, 192)', // Line color (turquoise)
          borderWidth: 2, // Line width
          pointStyle: 'circle', // Set point style to circle
          pointRadius: 3, // Set the radius of points
          pointBackgroundColor: 'rgb(75, 192, 192)', // Set the background color of points
          pointBorderColor: 'white', // Set the border color of points
          pointBorderWidth: 1, // Set the border width of points
          pointHoverRadius: 5, // Adjust hover radius for larger points on hover
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              maxTicksLimit: 10 // Limit maximum number of ticks on x-axis
            }
          },
          y: {
            beginAtZero: true // Start y-axis from zero
          }
        }
      }
    });
  }
  
  renderChart2() {
    const dates = Object.keys(this.chartdata2.cases);
    const cases = Object.values(this.chartdata2.cases);
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'COVID-19 Cases (Bar)',
            data: cases,
            backgroundColor: 'rgba(255, 159, 64, 0.6)', // Bar color
            borderColor: 'rgba(255, 159, 64, 1)', // Border color
            borderWidth: 1, // Border width
            yAxisID: 'y-axis-1', // Assign to the primary y-axis
          },
          {
            label: 'COVID-19 Cases (Line)',
            data: cases,
            type: 'line', // Set the type to line
            fill: false, // Disable fill under the line
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            borderWidth: 2, // Line width
            //yAxisID: 'y-axis-2', // Assign to the secondary y-axis
            pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
            pointRadius: 5, // Point radius
            pointHoverRadius: 7, // Point hover radius
          }
        ]
      },
      options: {
        scales: {
     
        }
      }
    });
  }

  }

