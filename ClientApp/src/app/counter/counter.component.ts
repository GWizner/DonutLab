import { Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { listOfDonuts, Donuts, DonutService  } from '../donut.service'

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  public loadedDonuts: Donuts[] = [];

  constructor(private thisDonutService: DonutService) {
    this.GetDonut();
  }
  
  private isNewDonutsAvailableEventSubscribed: boolean = false;
  public GetDonut() {
    if (!this.isNewDonutsAvailableEventSubscribed) {
      this.thisDonutService.newDonutsAvailableEvent.subscribe((gotData) => {
        for (let currElementNo = 0; currElementNo < gotData.count; currElementNo++)
          this.loadedDonuts.push(gotData.results[currElementNo]);
        console.log("We got " + gotData.toString() + " donuts.");
      })
      this.isNewDonutsAvailableEventSubscribed = true;
    }
    this.thisDonutService.GetInfoFromServer();
  }
}
