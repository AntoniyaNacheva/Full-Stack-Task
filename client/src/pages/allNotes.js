import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const AllNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {

        const fetchNotes = async () => {
            try {
                const result = await axios.get("http://localhost:3001/notes");
                setNotes(result.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchNotes();
    }, []);

    return (
        <div className="notes-list">
            <h1> Notes List</h1>
            <ul>
                {notes.map((note) => (
                    <li key={note.noteId}>
                        <div>
                            <h2>{note.title}</h2>
                            <h3>{note.text}</h3>
                            <Link to={`/notes/${note.noteId}`}>
                                <button > Details </button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default AllNotes;

