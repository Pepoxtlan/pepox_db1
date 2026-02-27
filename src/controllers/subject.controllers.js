import Subject from "../models/subject.model.js";

export const createSubject = async (req, res) => {
    try {
        const { subjectname, key } = req.body;
        const newSubject = new Subject({
            subjectname,
            key,
            user: req.user.id // Toma el ID del usuario del token
        });
        const savedSubject = await newSubject.save();
        res.json(savedSubject);
    } catch (error) {
        return res.status(500).json({ message: "Error al crear la materia" });
    }
};

export const getSubjects = async (req, res) => {
    const subjects = await Subject.find({
        user: req.user.id
    }).populate('user');
    res.json(subjects);
};

export const getSubject = async (req, res) => {
    const subject = await Subject.findById(req.params.id).populate('user');
    if (!subject) return res.status(404).json({ message: 'Elemento no encontrado' });
    res.json(subject);
};

export const deleteSubjects = async (req, res) => {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) return res.status(404).json({ message: 'Elemento no encontrado' });
    return res.sendStatus(204);
};

export const updateSubjects = async (req, res) => {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!subject) return res.status(404).json({ message: 'Elemento no encontrado' });
    res.json(subject);
};