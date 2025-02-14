import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsPainelComponent } from './transactions-painel.component';

describe('TransactionsPainelComponent', () => {
  let component: TransactionsPainelComponent;
  let fixture: ComponentFixture<TransactionsPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsPainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
