import { Component } from '@angular/core';
import { Pet } from '../../model/Pet';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  standalone: false,
  templateUrl: './add-pet.html',
  styleUrl: './add-pet.scss'
})
export class AddPet {

  pet: Pet = new Pet();
  txtName = new FormControl(this.pet.name, [Validators.required, Validators.minLength(3)]);
  txtDescription = new FormControl(this.pet.description, [Validators.required]);
  txtAnimalType = new FormControl(this.pet.animalType, [Validators.required]);
  txtBirthDate = new FormControl(this.pet.birthDate, [Validators.required]);
  txtSex = new FormControl(this.pet.sex, [Validators.required]);
  txtPrice = new FormControl(this.pet.price, [Validators.required]);




  public submit() {
    console.log(this.pet);
  }

}
