import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { from } from 'rxjs';
import{ServicioService}from 'src/app/servicio/servicio.service';
import { response } from "src/app/modelo/response";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public _form = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private api:ServicioService, private router:Router) { }

  ngOnInit(): void {
  }

  login(_form:any){
    this.api.login(_form).subscribe(data=>
      {
     let dataresponse:response=data;
     localStorage.setItem("token",dataresponse.accesToken);
     this.router.navigate(['animals']);
     (console.log(data))
      }
     
     )
    }
    registro()
    {
      this.router.navigate(['registro']);
    }

}