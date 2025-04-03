import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.scss'
})
export class TituloComponent implements OnInit {
  public titulo = "Boas vindas"
  title = 'my-app';
  constructor() { }

  ngOnInit(): void {
    
    const hora = new Date().getHours();
    if (hora < 12) {
      this.titulo = "Bom dia"
    }
    else if (hora < 18) {
      this.titulo = "Boa tarde"
    }
    else {
      this.titulo = "Boa noite"
    }


    console.log('TituloComponent initialized');
  }

}
