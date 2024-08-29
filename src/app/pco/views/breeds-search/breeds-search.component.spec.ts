import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsSearchComponent } from './breeds-search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('BreedsSearchComponent', () => {
  let component: BreedsSearchComponent;
  let fixture: ComponentFixture<BreedsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedsSearchComponent ],
      imports: [ HttpClientModule ],
      providers: [ HttpClient ]
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
