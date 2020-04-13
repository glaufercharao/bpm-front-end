import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-nao-encontrada',
  template: `
    <div class="decoration">
      <span>Pagina não encontrada</span>
    </div>
  `,
  styles: [
    '.decoration{ text-align: center; color: darkcyan;}'
  ],
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
