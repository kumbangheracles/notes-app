import React from "react";
import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchiveButton";
export default function NoteFooter({id, onDelete, onArchived, archived}){
    return(
        <div className="note-footer">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchivedButton id={id} onArchived={onArchived} archived={archived}/>
        </div>
    )
}