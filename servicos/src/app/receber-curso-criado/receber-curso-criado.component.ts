import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styles: [
  ],
})
export class ReceberCursoCriadoComponent implements OnInit {

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {

    this.cursosService.emitirCursoCriado.subscribe((curso) => {
      console.log(curso);
    });

  }

}
