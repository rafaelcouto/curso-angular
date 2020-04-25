import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseForm} from '../../shared/base.form';
import {CursosService} from '../cursos.service';
import {AlertModalService} from '../../shared/alert-modal.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styles: []
})
export class CursosFormComponent extends BaseForm implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private cursosService: CursosService,
              private alertModalService: AlertModalService,
              private location: Location,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]]
    });

    /**
     * Utilizando guarda de rotas para recuperar o curso
     */
    this.formulario.patchValue(this.route.snapshot.data.curso);

    /**
     * Método com promise
     */
    // this.route.params.subscribe(async (params: any) => {
    //   const id = params.id;
    //   const curso = await this.cursosService.getById(id).toPromise();
    //   this.formulario.patchValue(curso);
    // });


    /**
     * O map permite filtrar os dados
     * o switchMap cancela o subscribe anterior e retorna outro Observable
     *
     * Não é necessário fazer unsubscribe nesse caso, pois quando sair da rota
     * o Angular irá fazer isso automaticamente
     */
    // this.route.params.pipe(
    //   map(params => params.id),
    //   switchMap(id => this.cursosService.getById(id))
    // ).subscribe(curso => this.formulario.patchValue(curso));

  }

  async submit() {

    try {
      await this.cursosService.save(this.formulario.value).toPromise();
    } catch (e) {
      this.alertModalService.showAlertDanger('Falha ao salvar o curso');
      return;
    }

    const modal = this.alertModalService.showAlertSuccess('Curso salvo com sucesso');
    modal.content.close.subscribe(() => {
      this.location.back();
    });

  }

}
