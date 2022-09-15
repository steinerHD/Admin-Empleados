import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from 'src/app/service/crud-service.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.scss']
})
export class ListEmpleadosComponent implements OnInit {
  Empleados:any;

  constructor(
    public CrudService:CrudServiceService) {
     }

  ngOnInit(): void {
    this.CrudService.ObtenerEmpleados().subscribe(respuesta => {
      this.Empleados = respuesta;
    })
  }

  borrarEmpleado(id:any, iControl:any) {
    if (window.confirm("¿Deseas eliminar realmente a este empleado?")) {
      this.CrudService.EliminarEmpleados(id).subscribe(() => {
        this.Empleados.splice(iControl,1);
      })
    }
  }

}
