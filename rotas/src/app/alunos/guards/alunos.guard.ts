import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../login/auth.service';

/**
 * O canActivateChild aplica o mesmo conceito de CanActivate, porém somente
 * nas rotas filhas. É útil para testarmos se o usuário tem permissão para acessar a rota
 */
@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (state.url === '/alunos') {
      return confirm('Deseja entrar na consulta?');
    }

    return true;

  }

}