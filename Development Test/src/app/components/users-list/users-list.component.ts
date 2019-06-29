import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( (users: User[]) => {
      this.users = users;
    });
  }

  editUser(userId){
    this.router.navigate(['/edit-user'], { 
      queryParams: {
        userId: userId
      } 
    });
  }

  deletePost(userId){
      this.userService.deleteUser(userId).subscribe( () => {
        const userIndex = this.users.findIndex( (user) => user.id === userId);
        this.users.splice(userIndex, 1);
      });
  }

}
