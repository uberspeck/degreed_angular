import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDecadePickerComponent } from './movie-decade-picker.component';

describe('DecadePickerComponent', () => {
  let component: MovieDecadePickerComponent;
  let fixture: ComponentFixture<MovieDecadePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDecadePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDecadePickerComponent);
    component = fixture.componentInstance;
    component.decadeChoices = [1980, 1990, 2000];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test 2000 decade selection', () => {
    spyOn(component.select, 'emit');
    const button = fixture.nativeElement.querySelector('#decade2000');
    button.click();
    expect(component.select.emit).toHaveBeenCalledWith(2000);
  });

  it('should test "all movies" selection', () => {
    spyOn(component.select, 'emit');
    const button = fixture.nativeElement.querySelector('#allMovies');
    button.click();
    expect(component.select.emit).toHaveBeenCalledWith(null);
  });

});
