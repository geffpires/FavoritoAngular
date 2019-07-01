import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  name: string;
  constructor() {
    this.name = 'OPA!'
   }

  ngOnInit() {
  }

}
