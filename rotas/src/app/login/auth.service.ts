import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;

  onLogin = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario): void {
    this.usuarioAutenticado = (usuario.nome === 'rafael' && usuario.senha === '123');
    this.onLogin.emit(this.usuarioAutenticado);
    if (this.usuarioAutenticado) {
      this.router.navigate(['/']);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
