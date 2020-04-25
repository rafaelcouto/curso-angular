import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: [
  ],
  providers: [CursosService, LogService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe((curso) => {
      this.cursos.push(curso);
    });

  }

}
