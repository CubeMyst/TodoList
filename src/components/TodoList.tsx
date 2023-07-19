import { TodoListProps, TodoTypes } from "../types/types.d";
import Todo from "./Todo";
import TodoFilters from "./TodoFilters";

export default function TodoList({
  todos,
  activeFilter,
  handleSetComplete,
  handleDelete,
  handleClearCompletes,
  showAll,
  showActive,
  showCompleted,
}: TodoListProps) {
  return (
    <div className="flex flex-col mt-7 rounded-lg font-sans overflow-hidden shadow-2xl">
      {todos.map((todo: TodoTypes) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
        />
      ))}

      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
        handleClearCompletes={handleClearCompletes}
      />
    </div>
  );
}
