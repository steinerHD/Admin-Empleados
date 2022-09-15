import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudServiceService } from 'src/app/service/crud-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-empleados',
  templateUrl: './edit-empleados.component.html',
  styleUrls: ['./edit-empleados.component.scss']
})
export class EditEmpleadosComponent implements OnInit {

  formEmpleados:FormGroup;
  elId:any;
  constructor(
    private ActiveRoute:ActivatedRoute,
    private CrudService:CrudServiceService,
    public form: FormBuilder,
    public ruteador:Router) { 

      this.formEmpleados = this.form.group({
        nombre: [''],
        correo: ['']
      });
      
      this.elId = this.ActiveRoute.snapshot.paramMap.get('id');
      this.CrudService.ObtenerEmpleado(this.elId).subscribe((respuesta:any) => {
        this.formEmpleados.setValue({
          nombre: respuesta[0]['nombre'],
          correo: respuesta[0]['correo']
        });
      });


    }

  ngOnInit(): void {
  }

  enviarDatos():any {
    this.CrudService.EditarEmpleado(this.elId, this.formEmpleados.value).subscribe(() => {
      this.ruteador.navigateByUrl("/list");
    })
  }

}
