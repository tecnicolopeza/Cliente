import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CronometroComponent } from './elementos-module/cronometro/cronometro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje='';

  @ViewChild(CronometroComponent) cronometro: CronometroComponent | any;
  // actualizar(t: number) {
  //   this.mensaje = t + '(se actualiza cada 10 segundos)';
  // }
  tiempoCero(t: number) {
    this.mensaje ='(El tiempo ha llegado a 0)';
  }

  reiniciar() {
    this.mensaje ='(Ha pulsado reiniciar)';
    this.cronometro.resetear();
  }
}