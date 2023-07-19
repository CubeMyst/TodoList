import React, { FormEvent, useState } from "react";
import { TodoInputProp } from "../types/types.d";

export default function TodoInput({ addTodo }: TodoInputProp) {
  const [value, setValue] = useState("");

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value !== '') {
      addTodo(value);
      setValue("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className="mt-6 relative" onSubmit={handleAddTodo}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
      </div>

      <input
        className="shadow-lg font-sans pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="What's next..."
      />
    </form>
  );
}
