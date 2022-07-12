import { Component, OnInit } from '@angular/core';
import { ServicioTiempoService } from '../servicio-tiempo.service';


@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  tiempo: any;

  //esta variable del const es del tipo ServicioTiempoService
  constructor(private servicioTiempo: ServicioTiempoService) { }

  ngOnInit(): void{
    this.servicioTiempo.retornar().subscribe( result =>  this.tiempo = result);
  }

}
