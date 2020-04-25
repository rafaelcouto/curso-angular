import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://rafaelcouto.com.br';
  cursoAngular: boolean = true;

  urlImagem = 'https://picsum.photos/200/300';

  valorAtual : String = '';
  valorSalvo : String;

  isMouseOver : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado()  {
    alert('Oi')
  }

  onKeyUp(evento : KeyboardEvent) {
    let target : HTMLInputElement = <HTMLInputElement> evento.target;
    this.valorAtual = target.value;
  }

  salvarValor(valor : String) {
    this.valorSalvo = valor;
  }

  onMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

}
