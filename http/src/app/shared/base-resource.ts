import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {ResourceInterface} from './resource-interface';

export abstract class BaseResource<T extends ResourceInterface> {

  private readonly API = environment.API + 'cursos';

  protected constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<T[]>(this.API);
  }

  create(resource: T) {
    return this.http.post(this.API, resource).pipe(take(1));
  }

  update(resource: T) {
    return this.http.put(`${this.API}/${resource.id}`, resource).pipe(take(1));
  }

  save(resource: T) {
    if (resource.id) {
      return this.update(resource);
    }
    return this.create(resource);
  }

  getById(id: number) {
    return this.http.get<T>(`${this.API}/${id}`).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
