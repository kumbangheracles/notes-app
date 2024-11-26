import React from "react";
import NoteHead from "./NoteHead";
import NoteBody from "./NoteBody";
import DeleteButton from "./DeleteButton";

export default function NoteItem({title, body, createdAt, id, onDelete}){
    return(
        <div className="note-item">
            <NoteHead title={title} createdAt={createdAt} />
            <NoteBody body={body} />
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}