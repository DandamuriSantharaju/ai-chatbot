import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AichatbootComponent } from './aichatboot.component';

describe('AichatbootComponent', () => {
  let component: AichatbootComponent;
  let fixture: ComponentFixture<AichatbootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AichatbootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AichatbootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
