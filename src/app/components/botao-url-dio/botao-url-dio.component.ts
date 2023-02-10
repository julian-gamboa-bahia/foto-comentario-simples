import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-botao-url-dio',
  templateUrl: './botao-url-dio.component.html',
  styleUrls: ['./botao-url-dio.component.css']
})


export class BotaoUrlDioComponent {

  @Input() url_dio: string;


  constructor() {
    this.url_dio="";
  }
}
