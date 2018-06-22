import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private all_tasks;
  private task;

  constructor(private taskService:TaskService) {
    // define our task model on the front end
    this.task = {
      title:"",
      description:""
    }

  }

  ngOnInit() {

  }

  getAll(): void {
    this.taskService.all(data =>{
      console.log(data);
      this.all_tasks = data;
    });

    // console.log(`Click event is working`);
    // console.log(`Task event: " + ${task}`);
    //
    // console.log("Task ID: " + task._id);
    // console.log("Task Title: " + task.title);
    //
    // this.getTask(task);
    // getTask(id) {
    //   this.taskService.showTask(id, (data) => {
    //     this.task = data;
    //   });
    // }

  }

// getTask method for retrieving A single Task
  getTask(task) {
    console.log("Getting Task ID: " + task._id);
    this.taskService.showTask(task, (data) => {
      this.task = data;
      console.log("Found: " + data);
      console.log("Task ID: " + data._id);

      console.log("Task Title: " + data.title);
      console.log("Task Description: " + data.description);
      console.log("Task Completed?: " + data.completed);

    });
  }

}
