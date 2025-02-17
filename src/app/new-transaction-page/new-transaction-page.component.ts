import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transaction-page',
  standalone: false,
  templateUrl: './new-transaction-page.component.html',
  styleUrl: './new-transaction-page.component.css'
})
export class NewTransactionPageComponent {

  titulo?: string = 'New Transaction Page';

}
