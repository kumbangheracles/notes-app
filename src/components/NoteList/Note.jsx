import React from "react";
import NoteList from "./NoteList";
import FormInput from "../InputForm/FormInput";
import SearchBox from "../Navbar/SearchBox";
import { getInitialData, showFormattedDate } from "../../utils";

export default class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !==id);
        this.setState({notes});
    }
    onArchivedHandler(id) {
        this.setState((prevState) => {
          const updatedNotes = prevState.notes.map((note) =>
            note.id === id
              ? { ...note, archived: !note.archived } 
              : note
              
          );
          return { notes: updatedNotes };
        });
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
        const activeNotes = notes.filter((note) => !note.archived);
        const archivedNotes = notes.filter((note) => note.archived);
        return(
            <div className="note-app">
                <h1 className="title-app">Buat Catatan</h1>
                <FormInput addNotes={this.onAddHandler}/>

                
                <h1 className="title-aktif">Catatan Aktif: </h1>
                {activeNotes.length > 0 ?(
                    <NoteList notes={activeNotes}
                    onDelete={this.onDeleteHandler} 
                    onArchived={this.onArchivedHandler}/>
                ) :  
                (<h4 className="active-catatan">Tidak ada catatan aktif</h4>)}
                
                <h1 className="title-arsip">Catatan Arsip: </h1>
                {archivedNotes.length > 0 ? (
                    <NoteList
                    notes={archivedNotes}
                    onDelete={this.onDeleteHandler}
                    onArchived={this.onArchivedHandler}
                    />
                ) : (
                    <h4 className="arsip-catatan">Tidak ada catatan arsip</h4>
                )}
               
            </div>
        )
    }
}

