import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercer-componente',
  templateUrl: './tercer-componente.component.html',
  styleUrls: ['./tercer-componente.component.css']
})
export class TercerComponenteComponent implements OnInit {
  aula : string;
  nunEquipos: string;
  constructor() { 
    this.aula = "aula C14",
    this.nunEquipos = "22"
  }

  ngOnInit(): void {
  }

}
