import { Component } from '@angular/core';
import { DateService } from '../shared/date.service';
import { MomentPipe } from "../shared/momemt.pipe";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task, TasksService } from '../shared/tasks.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-organizer',
  standalone: true,
  imports: [MomentPipe, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './organizer.component.html',
  styleUrl: './organizer.component.scss'
})
export class OrganizerComponent {
  constructor(public dateService: DateService,
    private taskService: TasksService
  ) { }

  form: FormGroup;
  tasks: Task[] = [];

  ngOnInit() {
    this.dateService.date.pipe(
      switchMap(value => this.taskService.load(value))
    ).subscribe(tasks => {
      this.tasks = tasks
    })

    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }

  submit() {
    const { title } = this.form.value;
    const task: Task = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    }
    this.taskService.create(task).subscribe(task => {
      this.tasks.push(task)
      console.log('new task', task);

      this.form.reset()
    }, err => console.error(err))
  }

  removeTask(task: Task) {
    this.taskService.remove(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    }, err => console.error(err))
  }
}
