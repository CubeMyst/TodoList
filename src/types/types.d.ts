import { ReactNode } from "react";

export interface TodoTypes {
  id: string;
  title: string;
  completed: boolean;
  editable: boolean;
}

export interface TodoProps {
  todo: TodoTypes;
  handleSetComplete: (id: string) => void;
  handleDelete: (id: string) => void;
}

export interface ChildrenProp {
  children: ReactNode;
}

export interface ItemsLeftProp {
  total: number;
}

export interface TodoInputProp {
  addTodo: (value: string) => void;
}

export interface FilterButtonProps {
  action: () => void;
  active: string;
  filter: string;
}

export interface TodoShow {
  showAll: () => void;
  showActive: () => void;
  showCompleted: () => void;
}

export interface TodoFilterProps extends ItemsLeftProp, TodoShow {
  activeFilter: string;
  handleClearCompletes: () => void;
}

export interface TodoListProps extends TodoShow {
  todos: Todo[];
  activeFilter: string;
  handleSetComplete: (id: string) => void;
  handleDelete: (id: string) => void;
  handleClearCompletes: () => void;
}
