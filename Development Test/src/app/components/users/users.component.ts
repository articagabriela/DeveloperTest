import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public validated = true;
  @Output() public isvalidated = new EventEmitter();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.changeTitle("Users");
  }

}
