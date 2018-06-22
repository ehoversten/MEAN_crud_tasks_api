import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // dependancy inject our HTTP Client SERVICE MODULE
  constructor(private http:HttpClient) {  }

  all(cb) {
    this.http.get('/api/tasks')
    .subscribe( data => cb(data));
  }

  create(task, cb) {
    this.http.post('/api/tasks', task)
    .subscribe( data => cb(data));
  }

  showTask(task, cb) {
    this.http.get('/api/tasks/' + task._id)
    .subscribe(data => cb(data));
  }

  edit(task, cb) {
    this.http.put('/api/tasks/' + task._id, task)
    .subscribe(data => cb(data));
  }

  destroy(task,cb){
    this.http.delete("/api/tasks/"+task._id)
    .subscribe(data=>cb(data));
  }


}
