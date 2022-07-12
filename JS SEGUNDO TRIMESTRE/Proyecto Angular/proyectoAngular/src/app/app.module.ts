import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TiempoComponent } from './tiempo/tiempo.component';
import { HttpClientModule } from '@angular/common/http';
import { RelojComponent } from './reloj/reloj.component';
import { CodigoPostalPipe } from './pipes/codigo-postal.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
//HAY QUE IMPORTAR EL HTTPCLIENT SINO DA FALLO

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    TiempoComponent,
    RelojComponent,
    CodigoPostalPipe,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
