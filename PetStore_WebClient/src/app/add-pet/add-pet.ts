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
    
  }


  public submit() {
    console.log(this.pet);
    this.petStoreService.AddPet(this.pet).subscribe(result => console.log(result));
  }

}

