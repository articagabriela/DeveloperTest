import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { UsersComponent } from './components/users/users.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-post',
    component: AddPostComponent
  },
  {
    path: 'edit-post',
    component: EditPostComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
  {
    path: '',
    component: PostViewComponent
  },
  {
    path: 'posts',
    component: PostViewComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
