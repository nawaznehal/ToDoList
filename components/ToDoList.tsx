// components/ToDoList.tsx
import React from 'react';

type ToDoItem = {
  id: number;
  title: string;
  completed: boolean;
};

type ToDoListProps = {
  toDoItems: ToDoItem[];
  searchTerm: string;
  onDelete: (id: number) => void;
  onUpdate: (id: number, completed: boolean) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({ toDoItems, searchTerm, onDelete, onUpdate }) => {
  const filteredToDos = toDoItems.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="w-3/4 max-w-md">
      {filteredToDos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-4 mb-4 bg-white rounded-md shadow-sm"
        >
          <span className={todo.completed ? 'line-through text-gray-400' : ''}>{todo.title}</span>
          <div className="flex gap-2">
            <button
              onClick={() => onUpdate(todo.id, todo.completed)}
              className="px-3 py-1 bg-blue-500 text-white rounded-md"
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
