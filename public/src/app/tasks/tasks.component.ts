import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private all_tasks;

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.taskService.all(data =>{
      console.log(data);
      this.all_tasks = data;
    });
  }

}
