import React from "react";
import NoteItemBody from "./NoteItemBody";
import ButtonAction from "./ButtonAction";
import { showFormattedDate } from "../utils/data";

export default function NoteItem({ id, title, body, createdAt, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={showFormattedDate(createdAt)} />
      <ButtonAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
    </div>
  );
}
