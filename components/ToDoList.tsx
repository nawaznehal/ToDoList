import React from 'react';

// Define the types for to-do items
type ToDoItem = {
  id: number;
  title: string;
  completed: boolean;
};

interface ToDoListProps {
  toDoItems: ToDoItem[];
}

const ToDoList: React.FC<ToDoListProps> = ({ toDoItems }) => {
  return (
    <ul>
      {toDoItems.map((toDoItem) => (
        <li key={toDoItem.id}>
          <span>{toDoItem.title}</span>
          <span>{toDoItem.completed ? '✔️' : '❌'}</span>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
