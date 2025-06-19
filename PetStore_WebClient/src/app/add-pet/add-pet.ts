import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PetStoreService } from '../../services/pet-store.service';
import { Pet } from '../../model/Pet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',
  standalone: false,
  templateUrl: './add-pet.html',
  styleUrl: './add-pet.scss'
})
export class AddPet {

  public pet: Pet = new Pet();
  private router = inject(Router);

  constructor(private petStoreService: PetStoreService) {
  
  }

  public submit() {
    this.pet.birthDate = new Date(
      Number(this.pet.birthDateString.split("-")[0]),
      Number(this.pet.birthDateString.split("-")[1]),
      Number(this.pet.birthDateString.split("-")[2]));
    if (this.pet.sexString === "M") {
      this.pet.sex = true;
    }
    else {
      this.pet.sex = false;
    }
    
    this.petStoreService.AddPet(this.pet).subscribe(
      result => {
        this.router.navigate(['/petstore']);
      }, 
      error => {
        console.log(error);
      }
    );
  }

}

