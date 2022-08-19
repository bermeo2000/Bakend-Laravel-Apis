import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url:string="http://127.0.0.1:8000/api/v2/";

  headers=new HttpHeaders();

  constructor(private http:HttpClient) { }

  regUser(_form:any)
  {
    let dir= this.url+"register";
    return this.http.post<any>(dir,_form);
  }
  login(_form:any)
  {
    let dir= this.url+"login";
    return this.http.post<any>(dir,_form);
  }

  show()
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"cantones-show";
    return this.http.get<any>(dir, {headers:header});

  }
  showT()
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"tipos-show";
    return this.http.get<any>(dir, {headers:header});
  }

  

  regisCantones(_form:any)
  {
    var formdata = new FormData();
    formdata.append('cantones', _form.cantones);
    formdata.append('provincia_id', _form.provincia_id);
    formdata.append('imagen', _form.imagen);
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"ingresar-cantones";
    return this.http.post<any>(dir,formdata,{headers:header});
  }

  editCantones(_id:any):Observable<any>
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"cantones-edit/"+_id;
    return this.http.get<any>(dir,{headers:header});
  }

  updateCantones(_form:any,_id:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"cantones-update/"+_id;
    return this.http.post<any>(dir,_form,{headers:header});
  }

  destroyCantones(_id:any)
  {
    const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    let dir= this.url+"cantones-destroy/"+_id;
   return this.http.post<any>(dir,_id,{headers:header});
  }

  reporte()
  {
    /* const header=new HttpHeaders()
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`); */
    let dir= this.url+"reporte";
   return this.http.get<any>(dir/* ,{headers:header} */);
  }

}