import React from "react";

export default function NoteBody({body}){
    return(
        <div className="note-body">
            <p>{body}</p>
        </div>
    )
}