import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'; // Import the todo component
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, // This enables standalone functionality
  imports: [TodoComponent], // Import your TodoComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
