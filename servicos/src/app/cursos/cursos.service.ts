import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';


@Injectable({
  providedIn: 'root',
})
export class CursosService {

  static criouNovoCurso = new EventEmitter<string>();

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'PHP'];

  constructor(private logService: LogService) {
    console.log('CursosService instanciado');
  }

  getCursos(): string[] {
    this.logService.log('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.log('Adicionando curso');
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
