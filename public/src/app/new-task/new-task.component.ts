import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  // declare an instance of our model
  private task;

  constructor(private taskService:TaskService) {
    this.task = {
      title:"",
      description:""
    }
  }

  ngOnInit() {
  }

  createTask() {
    console.log("Submitted new Task!");
    console.log(this.task);
    this.taskService.create(this.task, (data)=> {
      console.log(data);
    });

    // reset our forms with blank strings - ""
    this.task = {
      title:"",
      description:""
    }

  }

}
