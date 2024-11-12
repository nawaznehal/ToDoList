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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch todos from the API
  const fetchTodos = async () => {
    try {
      const response = await fetch('/api/todos');
      const data = await response.json();
      if (response.ok) {
        setTodos(data);
      } else {
        setErrorMessage('Failed to fetch to-dos.');
      }
    } catch (error) {
      setErrorMessage('Error fetching to-dos.');
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

    try {
      const response = await fetch('/api/todos/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTodo }),
      });

      const data = await response.json();
      if (response.ok) {
        // Use callback version of setTodos to ensure we have the latest state
        setTodos((prevTodos) => [...prevTodos, data]);
        setNewTodo('');
      } else {
        setErrorMessage('Failed to create to-do.');
      }
    } catch (error) {
      setErrorMessage('Error creating to-do.');
    }
  };

  // Toggle completion status of a to-do
  const toggleCompletion = async (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    const updatedTodo = { ...todo, completed: !todo.completed };

    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTodo),
      });

      const data = await response.json();
      if (response.ok) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? data : todo))
        );
      } else {
        setErrorMessage('Failed to update to-do.');
      }
    } catch (error) {
      setErrorMessage('Error updating to-do.');
    }
  };

  // Handle deleting a to-do
  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      } else {
        setErrorMessage('Failed to delete to-do.');
      }
    } catch (error) {
      setErrorMessage('Error deleting to-do.');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>

      {/* Display error message if any */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

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
