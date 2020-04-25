import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CursosService} from '../cursos.service';
import {Curso} from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor(private cursosService: CursosService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {

    if (route.params && route.params.id) {
      return this.cursosService.getById(route.params.id);
    }

    return of<any>({});
  }
}
