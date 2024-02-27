import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompetitionsComponent } from './mycompetitions.component';

describe('MycompetitionsComponent', () => {
  let component: MycompetitionsComponent;
  let fixture: ComponentFixture<MycompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycompetitionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
