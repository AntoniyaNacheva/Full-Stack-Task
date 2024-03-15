import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {

    const [note, setNote] = useState({
        title: "",
        text: "",
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/notes", note);
            alert("Note created!");
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="create-note">
            <h2> Create Note</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleChange}
                />
                <label htmlFor="text">Text</label>
                <input
                    type="text"
                    id="text"
                    name="text"
                    onChange={handleChange}
                />
                <button type="submit">Create Note</button>
            </form>
        </div>
    );
};

export default CreateNote;