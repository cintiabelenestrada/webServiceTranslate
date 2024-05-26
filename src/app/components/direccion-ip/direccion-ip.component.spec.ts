import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionIPComponent } from './direccion-ip.component';

describe('DireccionIPComponent', () => {
  let component: DireccionIPComponent;
  let fixture: ComponentFixture<DireccionIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionIPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
