import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Task {
    title: string;
    completed: boolean;
}

@Component({
    selector: 'app-todo',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
    tasks: Task[] = [];
    newTask: string = '';
    filter: 'all' | 'completed' | 'pending' = 'all';

    get filteredTasks(): Task[] {
        if (this.filter === 'completed') {
            return this.tasks.filter(task => task.completed);
        } else if (this.filter === 'pending') {
            return this.tasks.filter(task => !task.completed);
        }
        return this.tasks; // Default: all
    }

    ngOnInit(): void {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks);
        }
    }

    addTask(): void {
        if (this.newTask.trim()) {
            this.tasks.push({ title: this.newTask.trim(), completed: false });
            this.newTask = '';
            this.saveTasks();
        }
    }

    deleteTask(task: Task): void {
        this.tasks = this.tasks.filter(t => t !== task);
        this.saveTasks();
    }

    saveTasks(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    setFilter(filter: 'all' | 'completed' | 'pending'): void {
        this.filter = filter;
    }
}
