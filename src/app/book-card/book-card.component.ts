import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent 
{
  @Input()name: string = '';
  @Input()author: string = '';
  @Input()year: number = 0;
  @Input()price: number = 0;
  @Input()img: string = '';
  
}
