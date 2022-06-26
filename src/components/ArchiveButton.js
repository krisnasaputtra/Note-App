import React from "react";

export default function ArchiveButton({ id, onArchive, archived }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {archived ? <p>Pindahkan</p> : <p>Archive</p>}
    </button>
  );
}
