import { TasksService } from './../tasks.service';
import { Component, EventEmitter,Input, Output , inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input({required: true}) userId!: string;
@Output() close =  new EventEmitter<void>();

enteredTitle = '';
enteredSummary = '';
enteredDate = '';
private tasksService = inject(TasksService)
onCancel(){
this.close.emit();
}

onSubmit(){
  this.tasksService.addTask({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate
  },this.userId);
  this.close.emit();
}

}
