import IconCheck from "../assets/check-icon.svg";
import IconClose from "../assets/close-icon.svg";
import IconDelete from '../assets/delete-icon.svg';
import IconEdit from "../assets/edit-icon.svg";
import IconSave from "../assets/save-icon.svg";
import { TodoProps, TodoTypes } from "../types/types.d";
import { useRef, useState } from "react";

type EditTypes = boolean;
type EditedTypes = string;

export default function Todo({
  todo,
  handleSetComplete,
  handleDelete,
}: TodoProps) {
  const { id, title, completed }: TodoTypes = todo;
  const [editMode, setEditMode] = useState<EditTypes>(false);
  const [editedTitle, setEditedtitle] = useState<EditedTypes>(title);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) inputRef.current.select();
  }

  const handleSetCompleteClick = () => {
    handleSetComplete(id);
  };

  const handleDeleteClick = () => {
    handleDelete(id);
  };

  const handleEditClick = () => {
    setEditMode(true);
    handleFocus()
  };

  const handleSaveClick = () => {
    todo.title = editedTitle;
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditedtitle(title);
    setEditMode(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedtitle(event.target.value);
  };

  return (
    <section className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div className="flex items-center w-full">
        {completed ? (
          <div
            className="h-6 w-6 bg-green-700 p-1 rounded-full cursor-pointer select-none"
            onClick={handleSetCompleteClick}
          >
            <img src={IconCheck} className="h-4 w-4" alt="Check" />
          </div>
        ) : (
          <span
            className="h-6 w-6 border border-gray-500 border-solid p-1 rounded-full cursor-pointer"
            onClick={handleSetCompleteClick}
          ></span>
        )}

        {editMode ? (
          <input
            className="pl-4 w-[100%] bg-transparent focus:outline-none"
            ref={inputRef}
            type="text"
            value={editedTitle}
            onFocus={handleFocus}
            onChange={handleChange}
          />
        ) : (
          <p className={`pl-4 ${completed && "opacity-50"}`}>{title}</p>
        )}
      </div>

      {!editMode ? (
        <div className="flex justify-center item-center gap-3 transition-all duration-300 ease-in select-none">
          <img
            src={IconEdit}
            className="h-5 w-5 cursor-pointer"
            onClick={handleEditClick}
            alt="Edit"
          />
          <img
            src={IconDelete}
            className="h-5 w-5 cursor-pointer"
            onClick={handleDeleteClick}
            alt="Close"
          />
        </div>
      ) : (
        <div className="flex justify-center item-center gap-3 transition-all duration-300 ease-in select-none">
          <img
            src={IconSave}
            className="h-5 w-5 cursor-pointer"
            onClick={handleSaveClick}
            alt="Save"
          />
          <img
            src={IconClose}
            className="h-5 w-5 cursor-pointer"
            onClick={handleCancelClick}
            alt="Cancel"
          />
        </div>
      )}
    </section>
  );
}
