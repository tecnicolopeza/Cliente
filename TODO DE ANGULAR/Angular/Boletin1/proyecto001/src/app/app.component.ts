import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alvaro';

  nombre:string = 'Rodriguez Pablo';
  edad:number = 20;
  email = 'rpablo@gmail.com';
  sueldos:any[] = [1700,1600,1900,2400,1500,600,'Javier',true];
  activo:boolean = false;

  esActivo():string { 
    if (this.activo) 
      return 'Trabajador Activo'; 
    else 
      return 'Trabajador Inactivo'; 
  }

  contador:number = 1;

  incrementar():void{
    this.contador++;
  }

  decrementar():void{
    this.contador--;
  }
}
