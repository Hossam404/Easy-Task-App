import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';
@Injectable({providedIn: 'root'})
export class TasksService{
  private tasks = [
    {
  id: 't1' ,
  userId: 'u1' ,
  title:'Master Angular' ,
  summary: 'Learn all the basic and advanced features of Angular & how to apply them ' ,
  dueDate: '2025-12-31'
    },

    {
      id: 't2' ,
      userId: 'u2' ,
      title:'Master .NET Core' ,
      summary: 'Learn all the basic and advanced features of .NET & how to apply them ' ,
      dueDate: '2025-6-31'
        },

        {
          id: 't3' ,
          userId: 'u3' ,
          title:'Master API' ,
          summary: 'Learn all the basic and advanced features of API & how to apply them ' ,
          dueDate: '2025-4-31'
            },
  ]
  constructor(){
    const tasks = localStorage.getItem('tasks');
    if (tasks){
      this.tasks = JSON.parse(tasks);
    }
  }
getUserTasks(userId: string){
  return this.tasks.filter((task) => task.userId == userId );
}

addTask(taskData: NewTaskData, userId: string){
  this.tasks.unshift({
    id: new Date().getTime().toString(),
    userId: userId ,
    title: taskData.title,
    summary: taskData.summary,
    dueDate: taskData.date
  });
  this.saveTasks();
}
removeTask(id: string){
  this.tasks = this.tasks.filter((task) => task.id !==id);
  this.saveTasks();
}

private saveTasks(){
  localStorage.setItem('tasks', JSON.stringify(this.tasks))
}
}

