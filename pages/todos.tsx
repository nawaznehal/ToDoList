import { useState, useEffect } from 'react';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const TodosPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState('');

  // Fetch todos from the API
  const fetchTodos = async () => {
    try {
      const response = await fetch('/api/todos');
      const data = await response.json();
      if (response.ok) {
        setTodos(data);
      } else {
        console.error('Failed to fetch to-dos:', data.message);
      }
    } catch (error) {
      console.error('Error fetching to-dos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Handle new to-do creation
  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo) return;

    const response = await fetch('/api/todos/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo }),
    });

    const data = await response.json();
    if (response.ok) {
      setTodos([...todos, data]); // Add the new to-do to the list
      setNewTodo(''); // Reset input field
    } else {
      console.error('Failed to create to-do:', data.message);
    }
  };

  // Toggle completion status of a to-do
  const toggleCompletion = async (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    const updatedTodo = { ...todo, completed: !todo.completed };

    const response = await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    });

    const data = await response.json();
    if (response.ok) {
      setTodos(todos.map((todo) => (todo.id === id ? data : todo))); // Update the to-do in the list
    } else {
      console.error('Failed to update to-do:', data.message);
    }
  };

  // Handle deleting a to-do
  const deleteTodo = async (id: number) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    if (response.ok) {
      setTodos(todos.filter((todo) => todo.id !== id)); // Remove the to-do from the list
    } else {
      console.error('Failed to delete to-do:', data.message);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>

      {/* Create To-Do Form */}
      <form onSubmit={handleCreateTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new to-do"
        />
        <button type="submit">Add To-Do</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <span>{todo.completed ? '✔️' : '❌'}</span>
              <button onClick={() => toggleCompletion(todo.id)}>
                {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No to-dos available</p>
      )}
    </div>
  );
};

export default TodosPage;
