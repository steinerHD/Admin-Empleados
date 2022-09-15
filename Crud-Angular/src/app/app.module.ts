import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpleadosComponent } from './components/add-empleados/add-empleados.component';
import { EditEmpleadosComponent } from './components/edit-empleados/edit-empleados.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AddEmpleadosComponent,
    EditEmpleadosComponent,
    ListEmpleadosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
