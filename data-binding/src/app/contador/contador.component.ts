import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input() valor : number = 0;
  @Output() onChangeValor = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.valor++;
    this.onChangeValor.emit({
      valor: this.valor
    });
  }

  decrementar() {
    this.valor--;
    this.onChangeValor.emit({
      valor: this.valor
    });
  }

}
