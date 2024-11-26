import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Note from "./components/NoteList/Note";
import FormInput from "./components/InputForm/FormInput";
export default function App(){
    return(
        <>
        <Navbar/>
        <br />
        <Note/>
        </>
    )
}