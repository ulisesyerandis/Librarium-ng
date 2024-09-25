import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import UserComponent from './Component/user/user.component';
import StoreComponent from './Component/Store/store.component';
import BookComponent from './Component/book/book.component';
import { BackgroundImageComponent } from './pages/main-page/background-image/background-image.component';
import { HeaderComponent } from './pages/main-page/header/header.component';
import  {NavbarComponent}  from './pages/main-page/navbar/navbar.component';
import { RecommendedBookSectionComponent } from './pages/main-page/recommended-book-section/recommended-book-section.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BestSellingBookSectionComponent } from './pages/main-page/best-selling-book-section/best-selling-book-section.component';
import { RegisterComponent } from './pages/form/register/register.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { Subject, bufferTime, concat, concatMap, delay, forkJoin, fromEvent, interval, of, range, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    CommonModule, RouterOutlet,
    UserComponent, StoreComponent, BookComponent,
    BackgroundImageComponent, HeaderComponent, NavbarComponent,
    RecommendedBookSectionComponent,BookCardComponent,
    BestSellingBookSectionComponent, RegisterComponent,
    TutorialComponent, RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  title = 'Librarium-ng';
  register: boolean = false;

  ngOnInit(): void 
  {
    this.printValue();
          // forkJoin
    const source1 = of('Hello');
    const source2 = of('World');

    // forkJoin([source1, source2]).subscribe(([val1, val2]) => {
    //   console.log('source1 = ' + val1)
    //   console.log('source2 = ' + val2)
    // })

    const source3 = of('ulises ramirez')
    const source4 = of('yerandis').pipe(delay(500));
    const source5 = interval(1000).pipe(take(2));
// forkJoin
    // forkJoin([source3, source4, source5]).subscribe(response => {
    //   console.log(response)
    // })
// fromEvent
    // const cont = document.getElementById('cont');
    // const mousemove = fromEvent(cont!, 'mousemove');
    // const mouseClick = fromEvent(cont!,'click');

    // mousemove.subscribe((e: Event) =>{
    //   console.log('x: '+e + ',' + 'y: ' + e)
    // });

    // mouseClick.subscribe((e) => {console.log('clicked = ' + e)})

    // swuitchMap
  //   fromEvent(cont!, 'click').pipe(switchMap(() => interval(1000))).subscribe(console.log);
  //   const source6 = interval(1000);
  //   const result = source6.pipe(switchMap(val => interval(val * 1000)));
  //   result.subscribe(val => {
  //     console.log(val)
  //     console.log('val. = ' + val)}
  // );
   
  const source6 = interval(1000).pipe(take(4));
  const source7 = range(1, 20); 
  
  const result2 = source3.pipe(concatMap(resource => (of( resource + ' heredia ****'))));
  const combined = concat(source7, source2, source3, source4, source5, source6, source1);

  result2.subscribe(resource =>(console.log(resource)));
// combined.subscribe(response => console.log('concat value = ' + response));

  }

  printValue()
  {
    console.log('valor = ' + this.register.valueOf())
  }

  changeView()
  {
    
  }

}
