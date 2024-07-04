import {Component, Input, input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TodoItem} from "../../models/todo.model";
import {TodoItemComponent} from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    TodoItemComponent
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todoList: Array<TodoItem> = [];
  onToggleCompleted(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
    console.log(this.todoList);
  }
}
