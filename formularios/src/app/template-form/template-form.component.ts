import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    endereco: {}
  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  async salvar() {
    const response: any = await this.httpClient.post('https://httpbin.org/post', this.usuario).toPromise();
    console.log(response);
  }

  campoInvalido(campo: NgModel): boolean {
    return !campo.valid && campo.touched;
  }

}
