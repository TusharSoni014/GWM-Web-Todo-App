import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "./redux/noteSlice";

export default function TodoItem({ text, index }) {
  const dispatch = useDispatch();
  return (
    <div
      id={index}
      className="__todo_item rounded-xl bg-yellow-100 p-3 w-full"
    >
      <p className=" text-black">{text.note}</p>
      <button
        onClick={() => dispatch(deleteNote(text.id))}
        className=" bg-red-500 p-2 rounded m-1"
      >
        Delete
      </button>
    </div>
  );
}
