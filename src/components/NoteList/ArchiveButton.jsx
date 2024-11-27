import React from "react";

export default function ArchivedButton({id, onArchived, archived}) {
    return (
        <button type="submit" className="note-item_archive" onClick={() => onArchived(id)} >{archived ? "Unarchive" : "Archive"}</button>
    )
}