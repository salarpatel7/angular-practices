import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { GoldService } from 'src/app/services/gold.service';

@Component({
  selector: 'app-gold-rate',
  templateUrl: './gold-rate.component.html',
  styleUrls: ['./gold-rate.component.css']
})
export class GoldRateComponent implements OnInit, OnDestroy {
  goldrate: any;
  intervalSubscription: Subscription | undefined;

  constructor(private goldService: GoldService) { }

  ngOnInit(): void {
    this.fetchGoldRate(); // Fetch gold rate initially

    // Subscribe to interval observable and fetch gold rate every 30 seconds
    this.intervalSubscription = interval(30000).subscribe(() => {
      this.fetchGoldRate();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from interval observable to prevent memory leaks
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  fetchGoldRate() {
    this.goldService.goldLiveRate().subscribe(
      (res: any) => {
        this.goldrate = res;
      },
      (error) => {
        console.error('Error fetching gold rate:', error);
      }
    );
  }
}
