import {EventEmitter, Injectable} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AlertModalComponent} from './alert-modal/alert-modal.component';
import {ConfirmModalComponent} from './confirm-modal/confirm-modal.component';

enum AlertType {
  DANGER = 'danger',
  SUCCESS = 'success',
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private bsModalService: BsModalService) {
  }

  showAlertDanger(message: string): BsModalRef {
    return this.showAlert(AlertType.DANGER, message);
  }

  showAlertSuccess(message: string): BsModalRef {
    return this.showAlert(AlertType.SUCCESS, message);
  }

  private showAlert(type: AlertType, message: string): BsModalRef {
    const bsModalRef = this.bsModalService.show(AlertModalComponent);
    const content = (bsModalRef.content as AlertModalComponent);
    content.type = type;
    content.message = message;
    return bsModalRef;
  }

  showConfirm(title: string, message: string): ConfirmModalComponent {
    const bsModalRef = this.bsModalService.show(ConfirmModalComponent);
    const content = (bsModalRef.content as ConfirmModalComponent);
    content.title = title;
    content.message = message;
    return content;
  }

}

