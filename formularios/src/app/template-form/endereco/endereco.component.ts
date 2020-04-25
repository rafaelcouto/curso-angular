import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConsultaCepService} from "../../shared/services/consulta-cep.service";

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'endereco',
  templateUrl: './endereco.component.html',
  styles: [
  ]
})
export class EnderecoComponent implements OnInit {

  @Input() endereco: any;

  constructor(private httpClient: HttpClient, private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  async consultaCEP(cep) {

    try {

      const dados: any = await this.consultaCepService.consultar(cep);

      this.endereco = Object.assign(this.endereco, {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      });

    } catch (e) {
      if (!(e instanceof TypeError)) throw e;
    }

  }

}
