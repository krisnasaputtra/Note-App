import React from "react";
import NoteInput from "./NoteInput";
import NoteSearch from "./NoteSearch";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/data";

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      notesDataBackUp: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
    this.setState({ notesDataBackUp: notes });
  }
  onArchiveHandler(id) {
    const notes = this.state.notes.find((note) => note.id === id);
    notes.archived = !notes.archived;
    this.setState((previousState) => {
      return {
        notes: [...previousState.notes],
      };
    });
  }
  onSearchHandler(title) {
    this.setState((previousState) => {
      console.log(previousState);
      return {
        ...previousState,
        notes: this.state.notesDataBackUp,
      };
    });
    this.setState((previousState) => {
      // console.log(previousState);
      return {
        ...previousState,
        notes: previousState.notes.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())),
      };
    });
  }
  onSubmitHandler({ title, body }) {
    this.setState((previousState) => {
      return {
        notes: [
          ...previousState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: "2022-04-14T04:27:34.572Z",
            archived: false,
          },
        ],
        notesDataBackUp: [
          ...previousState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: "2022-04-14T04:27:34.572Z",
            archived: false,
          },
        ],
      };
    });
  }
  render() {
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Notes App</h1>
        </div>
        <div className="note-app__body">
          <h2>Buat Catatan</h2>
          <NoteInput addNote={this.onSubmitHandler} />
          <NoteSearch onSearch={this.onSearchHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList notes={this.state.notes.filter((note) => note.archived === false)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
          <h2>Arsip</h2>
          <NoteList notes={this.state.notes.filter((note) => note.archived === true)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        </div>
      </div>
    );
  }
}
