import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos() {
    return [{ id: 1, nome: 'Angular' }, { id: 2, nome: 'PHP' }];
  }

  getCurso(id: number) {
    return this.getCursos().find((curso) => curso.id === id);
  }

  constructor() { }

}
