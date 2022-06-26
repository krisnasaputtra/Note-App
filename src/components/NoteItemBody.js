import React from "react";

export default function NoteItemBody({ title, body, createdAt }) {
  return (
    <div className="note-item__content">
      <h1 className="note-item__title">{title}</h1>
      <p className="note-item__date">{createdAt}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}
