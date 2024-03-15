import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const SingleNote = () => {
    const { noteId } = useParams();
    const [note, setNote] = useState();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const result = await axios.get(`http://localhost:3001/notes/${noteId}`);
                setNote(result.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchNote();
    }, [noteId]);

    const navigate = useNavigate();

    const deleteNote = async () => {
        try {
            await axios.delete(`http://localhost:3001/notes/${noteId}`);
            alert("Note deleted successfully!");
            navigate("/notes");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="details">
            <h1> Details </h1>
            {note ? (
                <>
                    <div>
                        <h2>{note.title}</h2>
                        <div>
                            <button onClick={deleteNote}> Delete </button>
                        </div>
                    </div>
                    <div>
                        <p>{note.text}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};