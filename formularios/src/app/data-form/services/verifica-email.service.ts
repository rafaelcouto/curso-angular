import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) {
  }

  emailExiste(email: string) {
    return this.http.get('assets/dados/emails.json').pipe(
      map((dados: { emails: any[] }) => dados.emails.filter(v => v.email === email).length > 0
      ));
  }
}
