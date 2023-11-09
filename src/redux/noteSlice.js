import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    notes: [],
    currentNote: "",
  },
  reducers: {
    updateCurrentNote: (state, action) => {
      state.currentNote = action.payload;
    },
    updateNotes: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },
  },
});

export default noteSlice.reducer;
export const { updateCurrentNote, updateNotes, deleteNote } = noteSlice.actions;
