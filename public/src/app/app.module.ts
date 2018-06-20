import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import the HTTP MODULE so we can send GET/POST requests to our Database
import { HttpClientModule } from '@angular/common/http';
// import the FORM MODULE so we can use forms
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ TaskService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
