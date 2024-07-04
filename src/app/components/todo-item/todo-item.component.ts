import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../../models/todo.model";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
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
