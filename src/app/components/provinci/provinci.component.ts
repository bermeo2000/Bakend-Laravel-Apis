import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import{ServicioService}from 'src/app/servicio/servicio.service';
import {response} from 'src/app/modelo/response';
import { Router } from '@angular/router'

@Component({
  selector: 'app-provinci',
  templateUrl: './provinci.component.html',
  styleUrls: ['./provinci.component.css']
})
export class ProvinciComponent implements OnInit {
  public _form = new FormGroup({
    cantones: new FormControl('',Validators.required),
    provincia_id: new FormControl('',Validators.required),
    imagen: new FormControl('',Validators.required)
  })
  tipo:any = [];
  animals:any = [];
  button:boolean=true;
  imagen1:any;

  constructor(private api:ServicioService, private router:Router) {
    this.tipo= this.api.showT().subscribe(res=>this.tipo=res);
    this.animals= this.api.show().subscribe(res=>this.animals=res);
  }

  ngOnInit(): void {
  }

  registro(_form:any){
    let t:any;

    t={
    'cantones':_form.cantones,
    'provincia_id':_form.provincia_id,
    'imagen':this.imagen1
    };

    this.api.regisCantones(t).subscribe(data=>(console.log(data)));
  }

  edit(_id:any){
    localStorage.setItem("id",_id);
    this.button=false
   this.api.editCantones(_id).subscribe(data=>{ 
      let t:any=data;
      this._form.setValue({
      'cantones':t.cantones,
      'provincia_id':t.provincia_id,
      'imagen':this.imagen1
      });
      (console.log(data))
    });
  }
  obtenerImagen(imagen:any){
    this.imagen1=imagen.target.files[0];
    }
  update(_form:any){
    let _id=localStorage.getItem("id")
    this.api.updateCantones(_form,_id).subscribe(data=>(console.log(data)));
  }

  destroy(_id:any){
    this.api.destroyCantones(_id).subscribe(data=>(console.log(data)));
  }

  reporte(){
    this.api.reporte().subscribe(data=>(console.log(data)));
  }

}