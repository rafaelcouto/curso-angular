import { Component, OnInit, Input } from '@angular/core';
import {FormControl, NgModel} from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'invalid-feedback',
  templateUrl: './invalid-feedback.component.html',
  styles: [
  ]
})
export class InvalidFeedbackComponent implements OnInit {

  @Input() model: NgModel | FormControl;
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
