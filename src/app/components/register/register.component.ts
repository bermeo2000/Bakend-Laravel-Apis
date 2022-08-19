import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import{ServicioService}from 'src/app/servicio/servicio.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public _form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private api:ServicioService, private router:Router) { }

  ngOnInit(): void {

  }

  registrarU(_form:any){
    this.api.regUser(_form).subscribe(data=>{
      (console.log(data));
      this.router.navigate(['login']);
    });
    
   }

}
