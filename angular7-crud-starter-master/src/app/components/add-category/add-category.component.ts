import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categories: Category[];
  addForm: FormGroup;
  submitted: boolean = false;
  
  constructor(
    private data: DataService,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.data.changeTitle("Add Category");
  }
}