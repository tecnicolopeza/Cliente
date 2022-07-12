import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioTiempoService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=utrera,pais&units=metric&appid=fff70737bb887cd2adb9bd7e2a052d1c");
  } 
}
