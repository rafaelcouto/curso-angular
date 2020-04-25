import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public nomePortal : string;
  public cursos : string[];

  constructor(private cursosService : CursosService) {
    this.nomePortal = 'http://loiane.training';
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}
