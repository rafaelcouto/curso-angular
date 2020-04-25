import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() nome: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeValor(evento) {
    console.log(evento);
  }

}
