import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import HeaderInput from "./components/HeaderInput";
import Title from "./components/HeaderTitle";
import TodoList from "./components/TodoList";
import { TodoTypes } from "./types/types.d";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Watch the next Marvel Movie",
      completed: false,
      editable: false,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title: string) => {
    const newTodo: TodoTypes = {
      id: uuidv4(),
      title,
      completed: false,
      editable: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleSetComplete = (id: string) => {
    const updatedList = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedList);
  };

  const handleClearComplete = () => {
    const updatedList = todos.filter((todo) => !todo.completed);
    setTodos(updatedList);
  };

  const handleDelete = (id: string) => {
    const updatedList: TodoTypes[] = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
    setTimeout(() => setClick(true), 300);
    setClick(false);
  };

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => !todo.completed);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  const [click, setClick] = useState<Boolean>(false);

  return (
    <main className="bg-gray-900 min-h-screen font-sans text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title title="Todo List" />
        <HeaderInput addTodo={addTodo} />
        <TodoList
          activeFilter={activeFilter}
          todos={filteredTodos}
          showAll={showAllTodos}
          showActive={showActiveTodos}
          showCompleted={showCompletedTodos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearCompletes={handleClearComplete}
        />

        {click && (
          <div className="alert alert-success" onClick={() => setClick(!click)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Delete has been confirmed!</span>
          </div>
        )}
      </div>
    </main>
  );
}
