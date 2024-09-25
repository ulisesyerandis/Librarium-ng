import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TutorialPipe } from "./pipe/tutorial.pipe";

@Component({
    selector: 'app-tutorial',
    standalone: true,
    templateUrl: './tutorial.component.html',
    styleUrl: './tutorial.component.css',
    imports: [
        CommonModule, FormsModule,
        TutorialPipe,
    ]
})
export class TutorialComponent 
{
  info: string = "";
  value: number = 0;

  onInput(value?: any)
  {
    console.log('the value is  ' + value.toString);
  }
}
