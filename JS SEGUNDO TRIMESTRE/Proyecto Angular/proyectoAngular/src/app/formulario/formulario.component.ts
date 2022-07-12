import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { ValidacionesPropias } from '../validaciones-propias';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private usuario: UsuariosService) { }

  resultado!: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    postal: new FormControl('', [Validators.required, ValidacionesPropias.codPostal]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    mail: new FormControl('', [Validators.required, Validators.email])
  });

  submit() {
    if (this.formularioContacto.valid){
      console.log(this.formularioContacto.value);
      this.resultado = "Todos los datos son válidos";
      this.usuario.alta(this.formularioContacto.value).subscribe((datos:any) => {
        if (datos['resultado']=='OK') {
          alert(datos['mensaje']);
        }
      });
    }else{
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

  ngOnInit(): void {
  }

}
