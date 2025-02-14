import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPainelComponent } from './filter-painel.component';

describe('FilterPainelComponent', () => {
  let component: FilterPainelComponent;
  let fixture: ComponentFixture<FilterPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterPainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
