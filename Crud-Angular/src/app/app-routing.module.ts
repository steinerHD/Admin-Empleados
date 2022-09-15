import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadosComponent } from './components/add-empleados/add-empleados.component';
import { EditEmpleadosComponent } from './components/edit-empleados/edit-empleados.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { InicioComponent } from './components/inicio/inicio.component';



const routes: Routes = [
  {path: 'add', component: AddEmpleadosComponent},
  {path: 'edit/:id', component: EditEmpleadosComponent},
  {path: 'list', component: ListEmpleadosComponent},
  {path: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
