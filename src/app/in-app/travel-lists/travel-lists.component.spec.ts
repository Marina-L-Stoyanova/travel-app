import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelListsComponent } from './travel-lists.component';

describe('TravelListsComponent', () => {
  let component: TravelListsComponent;
  let fixture: ComponentFixture<TravelListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
