import {Component, input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TodoItem} from "./models/todo.model";
import {AddTodoComponent} from "./components/add-todo/add-todo.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";

@Component({
  selector: 'todolist-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf, AddTodoComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list-angular';
  todoList: Array<TodoItem> = [];

  onAddTodo(item: TodoItem) {
    this.todoList.push(item);
  }
}
