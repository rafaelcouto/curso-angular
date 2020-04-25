import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cursos: any[] = [
    {
      nome: 'Angular', professor: {
        nome: 'Rafael Couto'
      }
    },
    { nome: 'React', professor: null },
  ];

}
