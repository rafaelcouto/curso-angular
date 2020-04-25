import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'alert-modal',
  templateUrl: './alert-modal.component.html',
  styles: []
})
export class AlertModalComponent implements OnInit {

  @Output() close = new EventEmitter();
  @Input() type = 'danger';
  @Input() message: string;

  constructor(private bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  doClose() {
    this.close.emit(true);
    this.bsModalRef.hide();
  }

}
