import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudServiceService } from 'src/app/service/crud-service.service';

@Component({
  selector: 'app-add-empleados',
  templateUrl: './add-empleados.component.html',
  styleUrls: ['./add-empleados.component.scss']
})
export class AddEmpleadosComponent implements OnInit {

  formEmpleados:FormGroup;

  constructor(    public form: FormBuilder,
    public ruteador: Router,
    private CrudService: CrudServiceService) {
    this.formEmpleados = this.form.group({
      "nombre": [''],
      "correo": ['']
    })
  }

  ngOnInit(): void {
  }

  sendDatos(): any {
    this.CrudService.AgregarEmpleados(this.formEmpleados.value).subscribe(()=> {
      this.ruteador.navigateByUrl('/list');
    })
  }

}
