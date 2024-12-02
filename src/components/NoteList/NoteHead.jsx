import React from "react";
import { showFormattedDate} from "../../utils";

export default function NoteHead({title, createdAt}){
    const formatted = showFormattedDate(createdAt)
    return(
        <div className="note-head">
            <h1>{title}</h1>
            <p>{formatted}</p>
        </div>
    )
}