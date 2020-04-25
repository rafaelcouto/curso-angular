import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanDeactivatePageInterface } from './can-deactivate-page';

@Injectable({
  providedIn: 'root'
})
export class PageDeactivateGuard implements CanDeactivate<CanDeactivatePageInterface> {
  canDeactivate(
    component: CanDeactivatePageInterface,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot): boolean {
      return component.podeDesativar();
  }

}
