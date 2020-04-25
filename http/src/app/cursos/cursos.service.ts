import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Curso} from './models/curso';
import {BaseResource} from '../shared/base-resource';

@Injectable({
  providedIn: 'root'
})
export class CursosService extends BaseResource<Curso> {

  constructor(http: HttpClient) {
    super(http);
  }

}
