import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardRoutesGuard } from './core/autentificacion/guard-routes.guard';
import { CargarSaldoComponent } from './modules/cargar-saldo/cargar-saldo/cargar-saldo.component';
import { DivisasComponent } from './modules/divisas/divisas/divisas.component';
import { ListaDeUsuariosComponent } from './modules/lista-de-usuarios/lista-de-usuarios/lista-de-usuarios.component';
import { MovimientosComponent } from './modules/movimientos/movimientos/movimientos.component';
import { PagarComponent } from './modules/pagar/pagar/pagar.component';

const routes: Routes = [

  {path:"", component:CargarSaldoComponent, canActivate:[GuardRoutesGuard]},
  {path:"divisas", component:DivisasComponent, canActivate:[GuardRoutesGuard]},
  {path:"listaDeUsuarios", component:ListaDeUsuariosComponent, canActivate:[GuardRoutesGuard]},
  {path:"movimientos", component:MovimientosComponent, canActivate:[GuardRoutesGuard]},
  {path:"pagar", component:PagarComponent, canActivate:[GuardRoutesGuard]},
 
  {path:"**", pathMatch:"full", component:CargarSaldoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
