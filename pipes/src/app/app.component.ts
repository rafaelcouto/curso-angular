import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  objeto = {
    titulo: 'aplicação para teste de pipes',
    valor: 1.2345
  };

  livros: string[] = ['Angular', 'PHP'];
  filtro: string;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 2000);
  });

  addLivro(livro: string) {
    this.livros.push(livro);
  }

  obterLivros() {
    if (this.livros.length === 0 || !this.filtro) {
      return this.livros;
    }
    return this.livros.filter(v => v.toLocaleLowerCase().indexOf(this.filtro) !== -1);
  }


}
