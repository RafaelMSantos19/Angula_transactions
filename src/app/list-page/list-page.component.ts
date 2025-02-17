import { Component } from '@angular/core';

@Component({
  selector: 'app-list-page',
  standalone: false,
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {

  titulo?: string = 'List Page';

  transacoesExemplo = [
    { id: 1, data: '2025-02-04T03:27:27.499Z', valor: "R$ "+25, status: "confirmada", mp: "PIX" }
  ];

}
