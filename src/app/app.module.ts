import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './core/navbar/navbar.module';
import { FooterModule } from './core/footer/footer.module';

import { AutentificacionModule } from './core/autentificacion/autentificacion.module';
import { CargarSaldoModule } from './modules/cargar-saldo/cargar-saldo.module';
import { DivisasModule } from './modules/divisas/divisas.module';
import { ListaDeUsuariosModule } from './modules/lista-de-usuarios/lista-de-usuarios.module';
import { MovimientosModule } from './modules/movimientos/movimientos.module';
import { PagarModule } from './modules/pagar/pagar.module';
import { ShareModule } from './share/share.module';





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarModule,
    FooterModule,
    CargarSaldoModule,
    DivisasModule,
    ListaDeUsuariosModule,
    MovimientosModule,
    PagarModule,
    ShareModule,
    AutentificacionModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
