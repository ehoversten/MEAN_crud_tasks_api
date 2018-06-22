import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  snacks: string[];
  loggedIn: boolean;
  @Input() task;

  constructor(private ts:TaskService) {
    this.task = {
      title: "",
      description: ""
    };
  }

  ngOnInit() {
    this.snacks = ["vanilla latte with skim milk", "cookie"];
    this.loggedIn = true;
  }


}
