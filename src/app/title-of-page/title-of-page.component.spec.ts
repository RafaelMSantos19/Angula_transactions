import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleOfPageComponent } from './title-of-page.component';

describe('TitleOfPageComponent', () => {
  let component: TitleOfPageComponent;
  let fixture: ComponentFixture<TitleOfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleOfPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
