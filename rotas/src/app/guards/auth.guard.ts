import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  /**
   * O CanLoad permite testar se o arquivo do módulo podem ser carregados
   * sendo assim, se estivermos utilizando o recurso de Lazy Loading, o usuário
   * que não tiver acesso ao módulo, nunca terá o arquivo do módulo carregado
   * @param route Route
   */
  canLoad(route: Route): boolean {
    return this.verificaUsuarioAutenticado();
  }

  /**
   * O CanActivate nos permite testar se o usuário pode entrar na rota
   * @param route ActivatedRouteSnapshot
   * @param state RouterStateSnapshot
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.verificaUsuarioAutenticado();
  }

  verificaUsuarioAutenticado() {

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;

  }

}
