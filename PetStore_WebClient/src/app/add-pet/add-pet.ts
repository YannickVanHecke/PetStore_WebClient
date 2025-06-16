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
    txtName = new FormControl(this.pet.name, [Validators.required, Validators.minLength(4)]);
  constructor() {
    
  }

 
  public submit() {
    console.log(this.pet);
  }

}
