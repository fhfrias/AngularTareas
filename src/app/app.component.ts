import { Component } from '@angular/core';
import { Tarea } from './modelos/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listatarea: Array<Tarea>;
  tarea: Tarea = new Tarea();

  constructor() {
    this.mock();
  }

  mock() {
    let t1 = new Tarea('Comprar manzanas');
    this.listatarea = new Array();
    this.listatarea.push(t1);
  }

  altaTarea() {
    let tarea: Tarea = new Tarea(this.tarea.nombre);
    this.listatarea.push(tarea);
  }

  bajaTarea(tarea: Tarea) {
    let pos = this.listatarea.indexOf(tarea);
    this.listatarea.splice(pos,1);
  }
}
