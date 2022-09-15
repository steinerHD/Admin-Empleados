import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  API:string = 'http://localhost/empleados/'

  constructor(private HttpEmpleados:HttpClient) {
   }


   AgregarEmpleados(datosEmpleado:empleado):Observable<any> {
      return this.HttpEmpleados.post(this.API + "?insertar=1", datosEmpleado);
  }

  ObtenerEmpleados() {
    return this.HttpEmpleados.get(this.API);
  }

  EliminarEmpleados(id:any) {
    return this.HttpEmpleados.get(this.API + "?borrar="+ id);
  }

  ObtenerEmpleado(id:any) {
    return this.HttpEmpleados.get(this.API + "?consultar="+id)
  }

  EditarEmpleado(id:any, datosEmpleado:empleado):Observable<any> {
    return this.HttpEmpleados.post(this.API + "?actualizar="+id, datosEmpleado);
}
}
