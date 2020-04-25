import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Aluno } from '../models/aluno';
import { AlunosService } from '../alunos.service';

/**
 * Com o Resolver podemos buscar os dados antes do Angular entrar na rota
 */
@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Aluno {
    const id = Number(route.params.id);
    return this.alunosService.getAluno(id);
  }
}
