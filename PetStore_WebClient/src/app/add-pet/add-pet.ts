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
  public petGroup: FormGroup;

  public txtName = new FormControl(this.pet.name, [Validators.required, Validators.minLength(3)]);
  public txtDescription = new FormControl(this.pet.description, [Validators.required]);
  public txtAnimalType = new FormControl(this.pet.animalType, [Validators.required]);
  public txtBirthDate = new FormControl(this.pet.birthDate, [Validators.required]);
  public txtSex = new FormControl(this.pet.sex, [Validators.required]);
  public txtPrice = new FormControl(this.pet.price, [Validators.required]);

  constructor(private petStoreService: PetStoreService) {
    this.petGroup = new FormGroup({
      name: this.txtName,
      description: this.txtDescription,
      animalType: this.txtAnimalType,
      birthDate: this.txtBirthDate,
      sex: this.txtSex,
      price: this.txtPrice,
    });
  }


  public submit() {
    console.log(this.petGroup);
    console.log(this.petGroup.value);
    if (this.petGroup.valid) {
      this.pet = this.petGroup.value;
    }

  }

}
