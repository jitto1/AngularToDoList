# AngularToDoList
A sample angular project
# To-Do List Frontend Application

## Overview
This project is a simple **To-Do List application** built with **Angular**. It allows users to add, update, and delete tasks. The tasks are persisted in the browser using `localStorage`, so they remain available even after refreshing the page.

---

## Features
1. Add new tasks.
2. Mark tasks as completed.
3. Delete tasks.
4. Filter tasks by:
   - All
   - Completed
   - Pending
5. Tasks are saved in the browser using `localStorage`.

---

## Prerequisites
Ensure you have the following installed:

1. **Node.js and npm**:
   - [Install Node.js](https://nodejs.org/)
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```

2. **Angular CLI**:
   - Install globally:
     ```bash
     npm install -g @angular/cli
     ```
   - Verify installation:
     ```bash
     ng version
     ```

---

## File Structure

```
TodoListFrontend/
├── src/
│   ├── app/
│   │   ├── todo/
│   │   │   ├── todo.component.ts      # Logic for To-Do list functionality
│   │   │   ├── todo.component.html    # Template for the To-Do list
│   │   │   ├── todo.component.css     # Styling for the To-Do list
│   ├── app.component.ts       # Root component
│   ├── app.component.html     # Root template
│   └── main.ts                # Application bootstrap
├── angular.json                  # Angular CLI configuration
├── package.json                  # Project dependencies
└── README.md                    # Project instructions
```

---

## How to Use
1. **Add a Task**:
   - Type in the input field and click "Add".

2. **Complete a Task**:
   - Check the checkbox beside the task.

3. **Delete a Task**:
   - Click the "Delete" button beside a task.

4. **Filter Tasks**:
   - Use the "All", "Completed", or "Pending" buttons to filter tasks.

---
