import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DropdownService} from "../shared/services/dropdown.service";
import {Estado} from "../shared/models/estado";
import {ConsultaCepService} from "../shared/services/consulta-cep.service";
import {CustomValidators} from "../shared/custom-validators";
import {VerificaEmailService} from "./services/verifica-email.service";
import {distinctUntilChanged, map, sample, switchMap} from "rxjs/operators";
import {BaseForm} from "../shared/base.form";
import {Cidade} from "../shared/models/cidade";
import {fromEvent, Subscription} from "rxjs";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styles: []
})
export class DataFormComponent extends BaseForm implements OnInit {

  //estados: Observable<Estado[]>;
  estados: Estado[];
  cidades: Cidade[];
  cargos: any[];
  tecnologias: any[];
  newsletterOpcoes: any[];

  onEstadoValueChanges: Subscription;

  frameworks = [
    {nome: 'angular', descricao: 'Angular'},
    {nome: 'vue', descricao: 'Vue'},
    {nome: 'react', descricao: 'React'}
  ];

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient,
              private dropdownService: DropdownService,
              private consultaCepService: ConsultaCepService,
              private verificaEmailService: VerificaEmailService) {
    super();
  }

  ngOnInit(): void {

    //this.estados = this.dropdownService.obterEstadosBrasileiros();

    this.dropdownService.obterEstadosBrasileiros().subscribe((estados) => {
      this.estados = estados;
    });

    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOpcoes = this.dropdownService.getNewsletter();

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.checarSeEmailExiste.bind(this)],
        updateOn: "blur"
      }],
      confirmar_email: [null, [Validators.required, Validators.email, CustomValidators.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, CustomValidators.cepValidator]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['S'],
      termos: [null, [Validators.required, Validators.pattern('true')]],
      frameworks: this.buildFrameworks()
    });

    this.configurarCampoCEP();
    this.configurarCampoEstado();

  }

  configurarCampoCEP() {

    /*
    // Maneira de fazer consulta de CEP de forma reativa
    this.formulario.get('endereco.cep').statusChanges
      .pipe(distinctUntilChanged())
      .subscribe(async (status) => {

        if (status == 'INVALID') {
          return;
        }

        this.consultaCEP();

      });

     */

  }

  configurarCampoEstado() {

    // Maneira utilizando RxJS
    /*
   this.formulario.get('endereco.estado').valueChanges.pipe(
     map((siglaEstado) => this.estados.find(estado => estado.sigla == siglaEstado).id),
     switchMap((estadoId: number) => this.dropdownService.obterCidades(estadoId))
   ).subscribe((cidades) => {
     this.cidades = cidades;
   });

    */

    /*
    // Maneira utilizando Promise
    this.onEstadoValueChanges = this.formulario.get('endereco.estado').valueChanges.subscribe(async (siglaEstado) => {
      let estadoId: number = this.estados.find(estado => estado.sigla == siglaEstado).id;
      this.cidades = await this.dropdownService.obterCidades(estadoId).toPromise();
    });
     */

  }

  carregarCidades() {
    let siglaEstado = this.formulario.get('endereco.estado').value;
    let estadoId: number = this.estados.find(estado => estado.sigla == siglaEstado).id;

    return this.dropdownService.obterCidades(estadoId).toPromise().then((cidades) => {
      this.cidades = cidades ;
    })
  }

  buildFrameworks() {
    const controls = this.frameworks.map(framework => new FormControl(false));
    return this.formBuilder.array(controls, CustomValidators.requiredMinCheckbox());
  }

  async submit() {

    // Copia o objetos de valores do formulário, para não refletir no formulário
    let data = Object.assign({}, this.formulario.value);

    // Copia os valores e substitui os valores de true/false pelo nome do framework
    data = Object.assign(data, {
      frameworks: data.frameworks.map((v, i) => v ? this.frameworks[i].nome : null).filter((v) => v !== null)
    });

    const response: any = await this.httpClient.post('https://httpbin.org/post', data).toPromise();
    console.log(response);
    this.formulario.reset();
  }

  async consultaCEP() {

    const cep = this.formulario.get('endereco.cep').value;

    try {

      const dados: any = await this.consultaCepService.consultar(cep);

      this.formulario.patchValue({
        endereco: {
          rua: dados.logradouro,
          complemento: dados.complemento,
          bairro: dados.bairro,
          estado: dados.uf
        }
      });

      this.carregarCidades().then(() => {
         let cidade = this.cidades.find(cidade => cidade.nome == dados.localidade);
         this.formulario.get('endereco.cidade').setValue(cidade.id);
      });

    } catch (e) {
      if (!(e instanceof TypeError)) throw e;
    }

  }

  checarSeEmailExiste(formControl: FormControl) {
    return this.verificaEmailService.emailExiste(formControl.value)
      .pipe(
        map((emailExiste) => emailExiste ? {emailExiste: true} : null)
      );
  }


}
