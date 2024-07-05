import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  Renderer2
} from '@angular/core';
import {TodoItem} from "../../models/todo.model";
import {FormsModule} from "@angular/forms";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgStyle
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
