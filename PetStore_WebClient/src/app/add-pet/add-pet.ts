import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PetStoreService } from '../../services/pet-store.service';
import { Pet } from '../../model/Pet';

@Component({
  selector: 'app-add-pet',
  standalone: false,
  templateUrl: './add-pet.html',
  styleUrl: './add-pet.scss'
})
export class AddPet {

  public pet: Pet = new Pet();
  
  constructor(private petStoreService: PetStoreService) {
    this.pet = new Pet();
    this.pet.name = "Timo";
    this.pet.animalType = 1;
    this.pet.sex = true;
    this.pet.birthDate = new Date(2007, 5, 3)
    this.pet.birthDateString = this.pet.birthDate.toISOString().split("T")[0];
    this.pet.description = "Timo is een rosse kat";
    this.pet.price = 250;
    console.log(this.pet);
  }

  public logSex() {
    console.log(this.pet);
  }

  public submit() {
    console.log(this.pet);
    this.petStoreService.AddPet(this.pet).subscribe(
      result => {console.log(result);}, 
      error => {console.log(error);
    });
  }

}

