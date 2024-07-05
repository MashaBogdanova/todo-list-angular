import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {TodoItem} from "../../models/todo.model";
import {TodoItemComponent} from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    TodoItemComponent,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnChanges, OnInit{
  @Input() todoList: Array<TodoItem> = [];
  upcomingTodos: Array<TodoItem> = [];
  completedTodos: Array<TodoItem> = [];

  constructor() {
  }

  ngOnChanges() {
    this.handleTodoList();
  }

  ngOnInit() {
    this.handleTodoList();
  }

  onToggleCompleted(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
    this.handleTodoList();
  }

  private handleTodoList () {
    this.upcomingTodos = this.todoList.filter((item) => !item.isCompleted);
    this.completedTodos = this.todoList.filter((item) => item.isCompleted);
  }
}

