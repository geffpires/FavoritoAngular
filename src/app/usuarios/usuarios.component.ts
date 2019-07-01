import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  names: string[];
  constructor() {
    this.names = ['Gefferson Pires', 'Gersu Vieira', 'Lucas Silva', 'Adele SetFire']
    }
  ngOnInit() {
  }

}
