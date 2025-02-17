import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list-page',
  standalone: false,
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})

export class ListPageComponent {

  titulo?: string = 'List Page';

  apiUrl = 'http://localhost:3090/gettransactions';

  transacoesExemplo = [
    { id: 1, data: '2025-02-04T03:27:27.499Z', valor: "R$ "+25, status: "confirmada", mp: "PIX" }
  ];

  constructor(private http: HttpClient) {}

  formatData(data: any, secondsWithMiliseconds: any): string {
    const date = new Date(data);
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedData = `${year}-${month}-${day} ${hours}:${minutes}`;
    
    return formattedData + secondsWithMiliseconds;
  }
  
  onFilterChange(filters: any): void {
    // debug
    console.log('Filtros recebidos: ', filters)

    const requestId = filters.id
    const requestDataInicial = this.formatData(filters.dataInicial,':00.000')
    const requestDataFinal = this.formatData(filters.dataFinal,':59.999')
    const requestValor = filters.valor
    const requestStatus = filters.status
    const requestMetodoPagamento = filters.metodo_pagamento

    // debug
    console.log({
      requestId,
      requestDataInicial,
      requestDataFinal,
      requestValor,
      requestStatus,
      requestMetodoPagamento
    });

    const headers = new HttpHeaders({
      'id': requestId?.toString() || '',
      'data_inicial': requestDataInicial,
      'data_final': requestDataFinal,
      'valor': requestValor?.toString() || '',
      'status': requestStatus || '',
      'metodo_pagamento': requestMetodoPagamento || ''
    })

    this.http.get(this.apiUrl, { headers }).subscribe(
      response => {
        console.log('Resposta da Api: ', response)
      },
      error =>{
        console.log('Erro na requisição: ', error)
      }
    )

  }

}


