import express from "express";
import { NoteModel } from "../models/Note.js";

const router = express.Router();

let allNotes = [{
    id: 1,
    title: 'Shopping',
    text: 'Milk, eggs'
}];

let currentId = 5;

router.get("/", (req, res) => {
    try {
        res.json(allNotes);
    } catch (err) {
        res.json(err);
    }
});

router.post("/", (req, res) => {
    const note = new NoteModel({ id: ++currentId, ...req.body });

    try {
        allNotes.push(note);
        res.json(note);
    } catch (err) {
        res.json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const note = allNotes.findById(req.params.id);
        res.json(note);
    } catch (err) {
        res.json(err);
    }
});

router.put("/:id", (req, res) => {
    try {
        const noteId = req.params.id;
        const index = allNotes.findIndex(n => n.id === noteId);

        if (index === -1) {
            return res.json({ message: "Note not found!" });
        }

        allNotes[index] = { ...allNotes[index], ...req.body, id: noteId };
        res.json({ message: "Note updated successfully!", note: allNotes[index] });

    } catch (err) {
        res.json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const allNotesLength = allNotes.length;

        allNotes.filter(n => n.id !== id);

        if (allNotes.length === allNotesLength) {
            return res.json({ message: 'Note not found!' });
        }
        res.json({ message: "Note deleted successfully!" });

    } catch (err) {
        res.json(err);
    }
});

export { router as noteRouter };




