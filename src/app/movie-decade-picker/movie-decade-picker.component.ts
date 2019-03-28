import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'degreed-movie-decade-picker',
  templateUrl: './movie-decade-picker.component.html',
  styleUrls: ['./movie-decade-picker.component.scss']
})
export class MovieDecadePickerComponent implements OnInit {

  @Input() selectedDecade: number;
  @Input() decadeChoices: number[];

  @Output() select: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public selectDecade(choice: number): void {
    this.select.emit(choice);
  }

}
