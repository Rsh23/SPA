import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number = 0;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router ) { 
    this.heroeSeleccionado = new EventEmitter(); 
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log( this.index );
    this.router.navigate( ['/heroe', this.index] );  // Recordar usar this para apuntar al mismo parametro dentro de este archivo
    // this.heroeSeleccionado.emit( this.index );
  }


}
