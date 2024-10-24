const express = require("express");
const fs = require("fs");
const path = require("path");

const fileName = path.join(__dirname, "Notes.json");

app = express();
app.use(express.json());

let notes = loadNotes();

function saveNotes(notes) {
  fs.writeFileSync(fileName, JSON.stringify(notes, null, 2));
}

function loadNotes() {
  if (fs.existsSync(fileName)) {
    const notesData = fs.readFileSync(fileName, "utf-8");
    return JSON.parse(notesData);
  }
  return [];
}

app.post("/create", function (req, res) {
  try {
    const note = req.body;
    const notes = loadNotes();
    notes.push(note);
    saveNotes(notes);
    console.log(note);
    res.send("Saved Notes");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/getNotes", function (req, res) {
  const allnotes = loadNotes();
  console.log(allnotes);
  res.send(allnotes);
});

app.put("/update/:index", function (req, res) {
  const notes = loadNotes();
  const updatedNote = req.body;
  const noteindex = parseInt(req.params.index);

  if (noteindex < 0 || noteindex >= notes.length) {
    return res.status(404).send("Note not found at the given index");
  }
  notes[noteindex] = { ...notes[noteindex], ...updatedNote };
  saveNotes(notes);
  res.send("Note updated successfully");
  console.log(noteindex);
});

app.put("/update", function (req, res) {
  const notes = loadNotes();
  const updatedNote = req.body;
  const noteindex = notes.findIndex((note) => note.id === updatedNote.id);

  if (noteindex < 0 || noteindex >= notes.length) {
    return res.status(404).send("Note not found at the given index");
  }
  notes[noteindex] = { ...notes[noteindex], ...updatedNote };
  saveNotes(notes);
  res.send("Note updated successfully");
  console.log(noteindex);
});

app.delete("/delete", function (req, res) {
  const notes = loadNotes();
  const noteId = req.query.id;
  const newNotes = notes.filter((note) => note.id !== noteId);
  if (notes.length === newNotes.length) {
    return res.status(404).send("Note not found with the given ID");
  }
  saveNotes(newNotes);
  console.log(noteId);

  res.send("Note deleted successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

function updateNotes(note) {
  const notes = loadNotes();
  notes[notes.findIndex((n) => n.id === note.id)] = note;
}
