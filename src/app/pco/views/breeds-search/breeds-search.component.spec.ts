import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsSearchComponent } from './breeds-search.component';

describe('BreedsSearchComponent', () => {
  let component: BreedsSearchComponent;
  let fixture: ComponentFixture<BreedsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
