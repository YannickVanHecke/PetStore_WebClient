import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetStoreService {
  private url = "https://localhost:44330/api/Pets";

  constructor(private http: HttpClient) { }

  public GetPets(): Observable<Array<Pet>> {
    return this.http.get<Array<Pet>>(this.url);
  }
}
