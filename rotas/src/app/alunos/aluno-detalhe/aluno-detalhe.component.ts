import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Location } from '@angular/common';
import { CanDeactivatePageInterface } from 'src/app/guards/can-deactivate-page';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styles: [
  ]
})
export class AlunoDetalheComponent implements OnInit, OnDestroy, CanDeactivatePageInterface {

  id: number;

  aluno: Aluno;
  routeParamsSubscription: Subscription;
  routeDataSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  podeDesativar(): boolean {
    return confirm('Deseja mesmo trocar de aluno?');
  }

  ngOnInit(): void {

    // Podemos recuperar o objeto que foi passado na rota
    this.routeParamsSubscription = this.route.params.subscribe((params) => {
      this.aluno = history.state.data?.aluno;
    });

    // Ou então utilizando um Resolver
    this.routeDataSubscription = this.route.data.subscribe((data: {aluno: Aluno}) => {
      console.log(data.aluno);
    });

    // Ou então fazendo a busca no prórpio ngOnInit

  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
    this.routeDataSubscription.unsubscribe();
  }

}
