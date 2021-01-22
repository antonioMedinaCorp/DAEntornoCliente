import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarNota(a:any, n:any){
    alert('El alumno '+a+' tiene una nota de '+n);
  }
}
