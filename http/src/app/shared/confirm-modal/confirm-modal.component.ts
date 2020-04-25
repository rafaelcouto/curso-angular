import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styles: []
})
export class ConfirmModalComponent implements OnInit {

  @Output() confirm = new EventEmitter();
  @Input() title: string;
  @Input() message: string;

  constructor(private bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  doConfirm() {
    this.confirm.emit(true);
    this.bsModalRef.hide();
  }

  doClose() {
    this.bsModalRef.hide();
  }

}
