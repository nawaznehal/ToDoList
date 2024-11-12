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

  // Filter to-do items based on search term
  const filteredToDos = toDoItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        type="text"
        placeholder="Search to-dos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <div>Loading to-do list...</div>
      ) : (
        <ToDoList toDoItems={filteredToDos} />
      )}
    </div>
  );
};

export default HomePage;
