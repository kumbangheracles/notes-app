import React from "react";
import NoteList from "./NoteList";
import FormInput from "../InputForm/FormInput";
import { getInitialData, showFormattedDate } from "../../utils";

export default class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !==id);
        this.setState({notes});
    }

    onAddHandler({title, body}){
        this.setState((prevState) =>{
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: showFormattedDate(new Date()),
                    }
                ]
            }
        })
    }

    render(){
        const { notes } = this.state;
        return(
            <div className="note-app">
                <h1 className="title-app">Buat Catatan</h1>
                <FormInput addNotes={this.onAddHandler}/>

                
                <h1>Catatan Aktif</h1>
                {notes.length > 0 ?(
                    <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
                ) :  
                (<h4>Tidak ada catatan</h4>)}
                
               
            </div>
        )
    }
}

