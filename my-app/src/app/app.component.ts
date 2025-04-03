import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from './titulo/titulo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TituloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
