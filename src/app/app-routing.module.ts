import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservaComponent } from './reserva/reserva.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'principal', component: PrincipalComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
