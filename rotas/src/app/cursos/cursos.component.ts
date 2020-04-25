import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: [
  ]
})
export class CursosComponent implements OnInit, OnDestroy {

  routeQueryParamsSubscription: Subscription;

  pagina: number;
  cursos: any[];

  constructor(private route: ActivatedRoute, private router: Router, private cursosService: CursosService, ) {

    this.routeQueryParamsSubscription = this.route.queryParams.subscribe((params) => {
      this.pagina = Number(params.pagina);
    });

  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  ngOnDestroy() {
    this.routeQueryParamsSubscription.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(['/cursos'], {
      queryParams: {
        pagina: this.pagina + 1
      }
    });
  }

}
