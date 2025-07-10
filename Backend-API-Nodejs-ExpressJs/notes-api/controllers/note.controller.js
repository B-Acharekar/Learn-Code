const Note = require('../models/note.model')

exports.createNote = async(req,res) => {
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
};

exports.getNote = async (req,res) => {
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).send('Note not found');
    res.json(note);
};

exports.updateNote = async(req,res) => {
    const note = await Note.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.json(note);
}

exports.deleteNote = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.send('Note deleted')
}