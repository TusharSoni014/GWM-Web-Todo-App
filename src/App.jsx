import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./todoItem";
import { updateCurrentNote, updateNotes } from "./redux/noteSlice";
import { nanoid } from "nanoid";

function App() {
  const currentNote = useSelector((state) => state.noteSlice.currentNote);
  const allNotes = useSelector((state) => state.noteSlice.notes);
  const dispatch = useDispatch();

  function handleAddNote(e) {
    e.preventDefault();
    if(currentNote === ""){
      alert("note is empty");
      return
    }
    dispatch(updateNotes({ note: currentNote, id: nanoid() }));
    dispatch(updateCurrentNote(""))
  }

  return (
    <div className="__app bg-slate-800 w-full min-h-[100vh] text-white p-5">
      <h1 className="__title text-4xl bg-slate-900 p-3 flex justify-center items-center">
        To-Do App
      </h1>
      <form
        onSubmit={handleAddNote}
        className="__form my-4 flex justify-center items-center "
      >
        <input
          value={currentNote}
          className="__input_box p-2 outline-none text-black"
          type="text"
          placeholder="type your to-do"
          onChange={(e) => dispatch(updateCurrentNote(e.target.value))}
        />
        <button type="submit" className="__add_btn bg-slate-900 p-2">
          Add
        </button>
      </form>
      <div className="__todo_list flex flex-col gap-2 p-2 bg-slate-600">
        {allNotes?.map((note, index) => {
          return <TodoItem id={index} key={index} text={note} />;
        })}
      </div>
    </div>
  );
}

export default App;
