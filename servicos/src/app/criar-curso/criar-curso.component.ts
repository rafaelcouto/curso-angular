import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styles: [
  ],
  providers: [CursosService, LogService]
})
export class CriarCursoComponent implements OnInit {

  curso: string;
  cursos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    
  }

  addCurso() {
    this.cursosService.addCurso(this.curso);
  }

}
