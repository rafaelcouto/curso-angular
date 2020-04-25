import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

@Injectable()
export class ConsultaCepService {

  constructor(private httpClient: HttpClient) { }

  consultar(cep): Promise<any> {

    if (!cep) {
      throw new TypeError;
    }

    cep = cep.replace(/\D/g, '');
    if (cep === '') {
      throw new TypeError;
    }

    const validaCep = /^[0-9]{8}$/;
    if (!validaCep.test(cep)) {
      throw new TypeError;
    }

    return this.httpClient.get(`//viacep.com.br/ws/${cep}/json`).toPromise();
  }

}
