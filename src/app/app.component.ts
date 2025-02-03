import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primer-proyecto-angular';

  //propiedades
  nombre = 'Erick';
  aniosServicio = 22;
  email = 'ep509122@gmail.com';
  activo = true;
  alumnos = [24,25,26]; 
  contador = 0;
  numero = 3;
  desactivarBoton = true;

  productos = [
    {
      id:1,
      descripcion: 'Galletas Oreo',
      precio: 18.50
    },
    {
      id:2,
      descripcion: 'Doritos',
      precio: 19.00
    },
    {
      id:3,
      descripcion: 'Coca Cola',
      precio: 17.00
    }
  ];

  //función que muestra un mensaje dependiendo de valor de la propiedad activa
  estaActivo(){
    if(this.activo) {
      return 'Empleado activo';
    }else {
      return 'Empleado no activo';
    }
  }

  //método que suma los valores del arreglo del alumno
  sumarAlumnos() {
    let suma = 0;
    for(let i=0;i<this.alumnos.length;i++){
      suma += this.alumnos[i];
    }
    return suma;
  }

  //funcion que genera un numero aleatorio entre 1 y 3
  generarNumero() {
    return Math.floor(Math.random() * 3 ) + 1;
  }

  //función para incrementar el contador
  incrementarContador(){
    this.contador++;
  }

  //función para decrementar el contador
  decrementarContador(){
    this.contador--;
  }

  //funcion que cambia el valor de desactivar boton
  cambiarValor() {
    this.desactivarBoton = false;
  }
}
