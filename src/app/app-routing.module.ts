import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
  { path: '', component: BasicosComponent, pathMatch: 'full' },
  { path: 'numeros', component: NumerosComponent, pathMatch: 'full' },
  { path: 'no-comunes', component: NoComunesComponent, pathMatch: 'full' },
  { path: 'ordenar', component: OrdenarComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
