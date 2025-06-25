import { Component } from '@angular/core';
import { PetStoreService } from '../../services/pet-store.service';
import { Pet } from '../../model/Pet';

@Component({
  selector: 'app-pet-store-overview',
  standalone: false,
  templateUrl: './pet-store-overview.html',
  styleUrl: './pet-store-overview.scss'
})
export class PetStoreOverview {
  /**
   *
   */
  public pets = new Array<Pet>();
  public errorMessage = "";

  constructor(private petStoreService: PetStoreService) {
    this.petStoreService.GetPets().subscribe(pets => {
      this.pets = pets;
    }, error => {
      this.errorMessage = "Het ophalen van data is mislukt.";
    });
  }
}