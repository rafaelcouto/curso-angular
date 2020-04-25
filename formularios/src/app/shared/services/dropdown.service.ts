import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Estado} from "../models/estado";
import {Cidade} from "../models/cidade";
import {map} from "rxjs/operators";

@Injectable()
export class DropdownService {

  constructor(private http: HttpClient) {
  }

  obterEstadosBrasileiros(): Observable<Estado[]> {
    return this.http.get<Estado[]>('assets/dados/estados.json');
  }

  obterCidades(estadoId: number): Observable<Cidade[]> {
    return this.http.get<Cidade[]>('assets/dados/cidades.json').pipe(
      map((dados: Cidade[]) => dados.filter(cidade => cidade.estado == estadoId))
    );
  }

  getCargos() {
    return [
      {nome: 'Dev', nivel: 'Junior', descricao: 'Dev. Jr'},
      {nome: 'Dev', nivel: 'Pleno', descricao: 'Dev. Pl'},
      {nome: 'Dev', nivel: 'Sênior', descricao: 'Dev. Sn'}
    ];
  }

  getTecnologias() {
    return [
      {nome: 'java', descricao: 'Java'},
      {nome: 'php', descricao: 'PHP'},
      {nome: 'javascript', descricao: 'Javascript'},
      {nome: 'ruby', descricao: 'Ruby'}
    ];
  }

  getNewsletter() {
    return [
      {valor: 'S', descricao: 'Sim'},
      {valor: 'N', descricao: 'Não'},
    ];
  }

}
