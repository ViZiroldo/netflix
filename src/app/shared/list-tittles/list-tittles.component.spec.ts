import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTittlesComponent } from './list-tittles.component';

describe('ListTittlesComponent', () => {
  let component: ListTittlesComponent;
  let fixture: ComponentFixture<ListTittlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTittlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTittlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
