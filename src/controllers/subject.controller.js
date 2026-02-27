import Subject from "../models/subject.models.js";

export const createSubject = async (req, res) => {
  try {
    const { subjectname, key } = req.body;
    const newSubject = new Subject({
      subjectname,
      key,
      user: req.user.id
    });
    const savedSubject = await newSubject.save();
    res.status(201).json(savedSubject);
  } catch (error) {
    res.status(500).json({
      message: "error al crear la materia", error: error.message  
    });
  }
};

export const getSubjects = async (req, res) => { 
  try {
    const subjects = await Subject.find({ user: req.user.id });
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({
      message: "error al obtener las materias", error: error.message
    });
  }
};