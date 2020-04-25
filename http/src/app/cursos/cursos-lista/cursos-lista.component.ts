import {Component, OnInit, ViewChild} from '@angular/core';
import {CursosService} from '../cursos.service';
import {Curso} from '../models/curso';
import {catchError, delay, finalize, switchMap, take} from 'rxjs/operators';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AlertModalComponent} from '../../shared/alert-modal/alert-modal.component';
import {AlertModalService} from '../../shared/alert-modal.service';
import {empty, Observable, of} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styles: []
})
export class CursosListaComponent implements OnInit {

  cursos: Curso[];
  cursos$: Observable<Curso[]>;

  carregandoCursos = false;

  constructor(private cursosService: CursosService,
              private alertModalService: AlertModalService,
              private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.refresh();
  }

  async refresh() {

    this.carregandoCursos = true;

    /**
     * Maneira utilizando promise com try/catch (visivelmente melhor na minha opnião)
     */

    // try {
    //   this.cursos = await this.cursosService.list().pipe(delay(1000)).toPromise();
    // } catch (e) {
    //   this.alertModalService.showAlertDanger('Falha ao carregar os cursos');
    // } finally {
    //   this.carregandoCursos = false;
    // }


    /**
     * Uma vantagem de utilizar o Observable com o pipe Async é que ao trocar de rota
     * a requisição é cancelada automaticamnete, evitando que exiba o alerta de erro
     * na outra página
     */
    this.cursos$ = this.cursosService.list().pipe(
      delay(500),
      take(1),
      finalize(() => this.carregandoCursos = false),
      catchError(() => {
        this.alertModalService.showAlertDanger('Falha ao carregar os cursos');
        return empty();
      })
    );

    /**
     * Maneira utilizando subscribe
     * take(1): para que seja feita uma tentativa e o subscribe seja destruido
     */

    // this.cursosService.list()
    //   .pipe(
    //     delay(1000),
    //     take(1),
    //     finalize(() => this.carregandoCursos = false)
    //   )
    //   .subscribe(
    //     (cursos) => {
    //       this.cursos = cursos;
    //     }, (error) => {
    //       this.alertModalService.showAlertDanger('Falha ao carregar os cursos');
    //     });

  }

  async edit(id: number) {
    await this.router.navigate(['cursos/editar', id]);
  }

  delete(curso: Curso) {

    const modal = this.alertModalService.showConfirm('Confirmação', 'Deseja remover o curso?');

    // modal.confirm.subscribe(async () => {
    //
    //   try {
    //     await this.cursosService.delete(curso.id).toPromise();
    //   } catch (e) {
    //     this.alertModalService.showAlertDanger('Erro ao remover curso');
    //     return;
    //   }
    //
    //   this.refresh();
    //
    // });

    modal.confirm
      .pipe(
        switchMap(() => this.cursosService.delete(curso.id)),
        catchError(() => {
          this.alertModalService.showAlertDanger('Erro ao remover curso');
          return empty();
        })
      )
      .subscribe(async () => {
        this.refresh();
      });

  }

}
