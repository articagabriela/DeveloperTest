import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from 'src/app/data.service';
import { CategoryService } from 'src/app/category.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { User } from 'src/app/models/User'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public addUserForm: FormGroup;
  submitted: boolean = false;
  //public validated = true;
  //@Output() public isvalidated = new EventEmitter();
  public id: number;
  public nameUser: string;
  public username: string;
  public password: string;
  public roles;
  public selectedRole: string;
  public seeRole: string = '';

  constructor(    
    private data: DataService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,) {
      this.roles = ["Admin", "Editor", "Viewer"];
  }  

  capturar() {
      this.seeRole = this.selectedRole;
  }

  ngOnInit() {
    this.data.changeTitle("Add User")
   /*  this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    }); */

    this.addUserForm = this.formBuilder.group({
      id: [],
      nameUser: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      selectedRole: ['', Validators.required],
    });
  }

  onSubmit(){
    this.submitted = true;
    /* alert(this.addUserForm.value.nameUser); */
    console.log(this.addUserForm.value);
    
    if(this.addUserForm.valid){
      this.userService.addUser(this.addUserForm.value).subscribe( data => {
        this.router.navigate(['users']);
      });
      /* alert("Valid"); */
    } else {
      /* alert("No valid"); */
    }
  }

  /* clear(){
    alert(this.nameUser + this.password);
    this.nameUser = "";
    this.username = "";
    this.password = "";
    this.selectedRole = "";
  } */
}
