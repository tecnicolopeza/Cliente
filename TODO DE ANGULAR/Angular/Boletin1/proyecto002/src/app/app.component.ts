import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  art={
    codigo:0 ,
    descripcion:"",
    ubicacion: "",
    precio:0
  }

  articulos = [
                {codigo:1, descripcion:'papas',ubicacion: 'Utrera', precio:10.55},
                {codigo:2, descripcion:'manzanas',ubicacion: 'Utrera', precio:12.10},
                {codigo:3, descripcion:'melon',ubicacion: 'Los Palacios', precio:52.30},
                {codigo:4, descripcion:'cebollas',ubicacion: 'Utrera', precio:17},
                {codigo:5, descripcion:'calabaza',ubicacion: 'Dos Hermanas', precio:20},
              ];

  hayRegistros() {
    return this.articulos.length>0;              
  }

  borrar(codigo:number) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==codigo)
      {
        this.articulos.splice(x,1);
        return;
      }
  }

  agregar() {
    if (this.art.codigo==0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)
    {
      alert('ya existe un articulo con dicho codigo');
      return;
    }        
    this.articulos.push({codigo:this.art.codigo,
                          descripcion:this.art.descripcion,
                          ubicacion:this.art.ubicacion,
                          precio:this.art.precio 
                        });
    this.art.codigo=0;
    this.art.descripcion="";	
    this.art.ubicacion="";	
    this.art.precio=0;    
  }

  seleccionar(art: { codigo: number; descripcion: string;ubicacion:string, precio: number; }) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.ubicacion=art.ubicacion;
    this.art.precio=art.precio;
  }

  modificar() {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].ubicacion=this.art.ubicacion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }
}