import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../../models/todo.model";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() toggleCompleted = new EventEmitter();

  onToggleCompleted () {
    this.toggleCompleted.emit();
  }
}
