import {Component, EventEmitter, Output} from '@angular/core';
import {TodoItem} from "../../models/todo.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  todoId = 0;
  todoItem = '';

  @Output() addTodo = new EventEmitter<TodoItem>();
  onSubmit() {
    this.addTodo.emit({
      id: this.todoId,
      title: this.todoItem,
      isCompleted: false,
    });
    this.todoItem = '';
    this.todoId++;
  }
}
