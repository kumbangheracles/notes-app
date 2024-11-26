import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({notes, onDelete}){
    return(
        <div className="note-list">
            {
                notes.map((note) =>(
                    <NoteItem key={note.id} onDelete={onDelete} {...note}/>
                ))
            }
        </div>
    )
}