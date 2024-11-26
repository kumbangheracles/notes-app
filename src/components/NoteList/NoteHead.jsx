import React from "react";
import { showFormattedDate} from "../../utils";

export default function NoteHead({title}){
    const formatted = showFormattedDate(new Date())
    return(
        <div className="note-head">
            <h1>{title}</h1>
            <p>{formatted}</p>
        </div>
    )
}