import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import UserComponent from './Component/user/user.component';
import StoreComponent from './Component/Store/store.component';
import BookComponent from './Component/book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    CommonModule, RouterOutlet,
    UserComponent, StoreComponent, BookComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Librarium-ng';
}
