import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-transaction-page',
  standalone: false,
  templateUrl: './new-transaction-page.component.html',
  styleUrl: './new-transaction-page.component.css'
})
export class NewTransactionPageComponent {

  titulo?: string = 'New Transaction Page';

  transactionForm: FormGroup;

  private apiUrl = 'http://localhost:3090/newTransaction';

  constructor(private fb: FormBuilder, private http: HttpClient){
    this.transactionForm = this.fb.group({
      valor: [''],
      status: [''],
      metodo_pagamento: ['']
    })
  }

  onSubmit(){
    if( this.transactionForm.valid) {
      const formData = this.transactionForm.value
      console.log('Dados enviados: ', formData)

      this.http.post(this.apiUrl, formData).subscribe({
        next: (response) =>{
          console.log("Sucesso: ", response);
          alert('Transação enviada com sucesso!');
        },
        error: (error) => {
          console.log('Erro ao enviar ', error);
          alert('Erro ao enviar transação.');
        }
      })
    }
  }

}
