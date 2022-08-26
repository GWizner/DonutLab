import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DonutDetails } from './donut-display/donut-display.component'

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private httpClient: HttpClient) { }
  @Output() newDonutsAvailableEvent = new EventEmitter<listOfDonuts>();
  @Output() newDetailsAvailableEvent = new EventEmitter<DonutDetails>();

  private storeDonutInfos: listOfDonuts | null = null;
  private storedDonutDetails: DonutDetails | null = null;

  public GetInfoFromServer() {
    let apiUrl: string = "https://grandcircusco.github.io/demo-apis/donuts.json"
    this.httpClient.get<listOfDonuts>(apiUrl).subscribe((gotData) => {
      this.storeDonutInfos = gotData;
      this.newDonutsAvailableEvent.emit(this.storeDonutInfos)
    })
  }
  public GetDetailsFromServer(id: number) {
    let apiUrl: string = "https://grandcircusco.github.io/demo-apis/donuts/" + id.toString() + ".json";
    this.httpClient.get<DonutDetails>(apiUrl).subscribe((gotData) => {
      this.storedDonutDetails = gotData;
      this.newDetailsAvailableEvent.emit(this.storedDonutDetails);
    })
  }
}

export class listOfDonuts {
  public count: number = 0;
  public results: Donuts[] = []
}
export class Donuts {
  public id: number = 0;
  public ref: string = "";
  public name: string = "";
  public photo: string = "";
  public photo_attribution: string = "";
}
