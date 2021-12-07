import { Component, OnInit } from '@angular/core';
import { Empleado } from '../model/empleado';
import { EmpleadoService } from '../service/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.consultarTodo();
  }

  listaEmpleados:Empleado[]=[];

  consultarTodo():void{
    this.empleadoService.consultarTodo().subscribe({
      next:(data:Empleado[])=>{
        this.listaEmpleados=data;
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("complete");
      }
    });
  }


}
