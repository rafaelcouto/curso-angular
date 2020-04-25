import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
}
