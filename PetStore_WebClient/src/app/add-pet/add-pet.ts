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
  
  public txtName = new FormControl(this.pet.name, [Validators.required, Validators.minLength(3)]);
  public txtDescription = new FormControl(this.pet.description, [Validators.required]);
  public txtAnimalType = new FormControl(this.pet.animalType, [Validators.required]);
  public txtBirthDate = new FormControl(this.pet.birthDate, [Validators.required]);
  public txtSex = new FormControl(this.pet.sex, [Validators.required]);
  public txtPrice = new FormControl(this.pet.price, [Validators.required]);

  constructor(private petStoreService: PetStoreService) {
    
  }


  public submit() {
    console.log(this.pet);
    this.petStoreService.AddPet(this.pet).subscribe(result => console.log(result));
  }

}

