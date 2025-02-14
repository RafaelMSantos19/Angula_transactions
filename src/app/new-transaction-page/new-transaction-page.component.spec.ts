import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionPageComponent } from './new-transaction-page.component';

describe('NewTransactionPageComponent', () => {
  let component: NewTransactionPageComponent;
  let fixture: ComponentFixture<NewTransactionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTransactionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTransactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
