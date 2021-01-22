import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {

  modulo: string;
  descripcion: string;
  constructor() {
    this.modulo = "DAW";
    this.descripcion = "desarrollo web";
   }

  ngOnInit(): void {
  }

  
mostrarProfesor(p:any){
  alert(p);
}

}
