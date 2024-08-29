import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsListComponent } from './breeds-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('BreedsListComponent', () => {
  let component: BreedsListComponent;
  let fixture: ComponentFixture<BreedsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedsListComponent ],
      imports: [ HttpClientModule ],
      providers: [ HttpClient ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
