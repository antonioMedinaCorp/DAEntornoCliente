import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {


  modulo: string;
  profesor: string;
  horasSemanales: string;
  constructor() { 

    this.modulo = "DWES",
    this.profesor = "Antonio de la Rosa",
    this.horasSemanales = "8"
  }

  ngOnInit(): void {
  }

}
