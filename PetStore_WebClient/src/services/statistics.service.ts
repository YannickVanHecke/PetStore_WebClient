import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartOptions } from '../model/chart/chartoptions';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private url = "https://localhost:63325/api/Statistics";

  constructor(private http: HttpClient) { }

  public GetStatistics(): Observable<ChartOptions> {
    return this.http.get<ChartOptions>(this.url);
  }


}
