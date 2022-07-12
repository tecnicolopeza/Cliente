import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiempoComponent } from './tiempo/tiempo.component';
import { RelojComponent } from './reloj/reloj.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {
    path:'tiempo',
    component: TiempoComponent
  },
  {
    path:'reloj',
    component: RelojComponent
  },
  {
    path:'formulario',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
