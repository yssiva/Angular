import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllslotsComponent } from './allslots.component';
describe('AllslotsComponent', () => {
  let component: AllslotsComponent;
  let fixture: ComponentFixture<AllslotsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllslotsComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AllslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
