import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { PostService } from 'src/app/post.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  public username;
  public password;
  public validated = false;
  @Output() public isvalidated = new EventEmitter();
 

  constructor() { 
  }

  ngOnInit() {

  }

  verify(){
    //crear un objeto del servicio y llamar su metodo.

    //validar si el user y password existen y son correctas. Obtener rol del user

    if (this.username === "admin" && this.password === "admin"){
      this.validated = true;
    } else {
      this.validated = false;
      this.clear();
      alert("This username or password are incorrect");
    }
    this.isvalidated.emit(this.validated);
  }

  clear(){
    this.username = "";
    this.password = "";
  }
}