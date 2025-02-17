import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-of-page',
  standalone: false,
  templateUrl: './title-of-page.component.html',
  styleUrl: './title-of-page.component.css'
})
export class TitleOfPageComponent {

  @Input() receiveTitle?: string
      
}
