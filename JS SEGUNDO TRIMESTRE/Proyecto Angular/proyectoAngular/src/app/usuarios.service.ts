import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url='http://localhost/conexiones/';
  constructor(private http: HttpClient) { }
  alta(datos:any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(datos));    
  }
}
