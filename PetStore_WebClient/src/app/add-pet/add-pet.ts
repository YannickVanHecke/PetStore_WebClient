import { Component } from '@angular/core';
import { Pet } from '../../model/Pet';

@Component({
  selector: 'app-add-pet',
  standalone: false,
  templateUrl: './add-pet.html',
  styleUrl: './add-pet.scss'
})
export class AddPet {
  public pet: Pet;
  public today: Date;
  public IsSelectPetKindTouch = false;
  
  /**
   *
   */
  constructor() {
    this.pet = new Pet();
    this.today = new Date();
  }

  public setTouchToTrue() {
    this.IsSelectPetKindTouch = true;
  }


}
