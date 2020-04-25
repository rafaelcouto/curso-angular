import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styles: [
  ]
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number;

  curso: any;
  incricao: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private cursosService: CursosService) {}

  ngOnInit(): void {
    this.incricao = this.route.params.subscribe((params) => {
      this.id = Number(params.id);
      this.curso = this.cursosService.getCurso(this.id);

      if (!this.curso) {
        this.router.navigate(['/cursos/curso-nao-encontrado']);
      }

    });
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }

}
