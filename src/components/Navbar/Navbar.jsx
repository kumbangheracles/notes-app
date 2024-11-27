import React from "react";
import SearchBox from "./SearchBox";
import Logo from './Logo'
import NoteList from "../NoteList/NoteList";
import { getInitialData, showFormattedDate } from "../../utils";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          notes: getInitialData(),
          searchQuery: "", // State untuk search box
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
      }
    
      onSearchHandler(event) {
        this.setState({ searchQuery: event.target.value });
      }
    render() {

        const { notes, searchQuery } = this.state;
        // Filter catatan berdasarkan title yang sesuai dengan searchQuery
        const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return (
            <nav className="navbar">
                <Logo />
                <SearchBox searchQuery={searchQuery} onSearch={this.onSearchHandler} />
            </nav>
        )
    }
}