import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  // Aqui se inicializa el router
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  buscarHeroe( termino: string ){
    // console.log(termino);
    // Esto redirecciona al nuevo componente que es buscar y buscar pide un termino
    this.router.navigate( ['/buscar', termino] );
  }

}
