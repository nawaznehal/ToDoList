// pages/index.tsx
import React, { useState, useEffect } from 'react';
import ToDoList from '../components/ToDoList';

type ToDoItem = {
  id: number;
  title: string;
  completed: boolean;
};

const HomePage: React.FC = () => {
  const [toDoItems, setToDoItems] = useState<ToDoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch to-do items on page load
  useEffect(() => {
    const fetchToDoItems = async () => {
      try {
        const res = await fetch('/api/todos');
        const data = await res.json();
        setToDoItems(data);
      } catch (error) {
        console.error('Error fetching to-do items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchToDoItems();
  }, []);

  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo) return;

    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo }),
    });

    const data = await response.json();
    if (response.ok) {
      setToDoItems([...toDoItems, data]);
      setNewTodo('');
    }
  };

  const handleDelete = async (id: number) => {
    const response = await fetch('/api/todos', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      setToDoItems(toDoItems.filter((todo) => todo.id !== id));
    }
  };

  const handleUpdate = async (id: number, completed: boolean) => {
    const response = await fetch('/api/todos', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, completed: !completed }),
    });

    const data = await response.json();
    if (response.ok) {
      setToDoItems(
        toDoItems.map((todo) =>
          todo.id === id ? { ...todo, completed: data.completed } : todo
        )
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">To-Do List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border rounded-md shadow-sm w-3/4 max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Add To-Do Form */}
      <form onSubmit={handleCreateTodo} className="flex gap-2 mb-6 w-3/4 max-w-md">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new to-do"
          className="flex-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      {/* Loading and To-Do List */}
      {loading ? (
        <p className="text-lg text-gray-600">Loading to-do list...</p>
      ) : (
        <ToDoList
          toDoItems={toDoItems}
          searchTerm={searchTerm}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default HomePage;
