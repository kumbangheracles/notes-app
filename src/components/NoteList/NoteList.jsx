import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({notes, onDelete, onArchived}){
    return(
        <div className="note-list">
            {
                notes.map((note) =>(
                    <NoteItem key={note.id} onArchived={onArchived} onDelete={onDelete} {...note} />
                    
                ))
            }
        </div>
    )
}