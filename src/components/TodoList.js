import { Todo } from "./Todo";
import { TodoFilters } from "./TodoFilters";

function TodoList({ todos, activeFilter, handleSetComplete, handleDelete, handleClearComplete, showAllTodos, showActiveTodos, showCompletedTodos }) {
    return (
        <div className="flex flex-col mt-7 rounded-lg font-sans overflow-hidden shadow-2xl">
            {
                todos.map(todo => (
                    <Todo key={ todo.id } todo={ todo } handleSetComplete={ handleSetComplete } handleDelete={ handleDelete } />
                ))
            }

            <TodoFilters activeFilter={ activeFilter } total={ todos.length } showAllTodos={ showAllTodos } showActiveTodos={ showActiveTodos } showCompletedTodos={ showCompletedTodos } handleClearComplete={ handleClearComplete } />
        </div>
    )
}

export { TodoList }