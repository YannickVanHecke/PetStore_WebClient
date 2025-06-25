import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../model/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetStoreService {
  private url = "https://localhost:63325/api/Pets";

  constructor(private http: HttpClient) { }

  public GetPets(): Observable<Array<Pet>> {
    return this.http.get<Array<Pet>>(this.url);
  }

  public AddPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.url, pet);
  }
}
