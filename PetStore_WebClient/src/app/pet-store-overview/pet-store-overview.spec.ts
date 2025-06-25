import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetStoreOverview } from './pet-store-overview';

describe('PetStoreOverview', () => {
  let component: PetStoreOverview;
  let fixture: ComponentFixture<PetStoreOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetStoreOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetStoreOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
