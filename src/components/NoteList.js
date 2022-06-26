import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  } else {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} archive={note.archived} {...note} />
        ))}
      </div>
    );
  }
}
