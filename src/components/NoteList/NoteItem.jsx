import React from "react";
import NoteHead from "./NoteHead";
import NoteBody from "./NoteBody";
import NoteFooter from "./NoteFooter";

export default function NoteItem({title, body, createdAt, id, onDelete, onArchived, archived}){
    return(
        <div className="note-item">
            <NoteHead title={title} createdAt={createdAt} />
            <NoteBody body={body} />
            <NoteFooter id={id} onDelete={onDelete} onArchived={onArchived} archived={archived}/>
        </div>
    )
}