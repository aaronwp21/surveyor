import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SurveyForm from '@/components/forms/SurveyForm';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import QuestionForm from '@/components/forms/QuestionForm';

function Create() {
  const [questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(false);

  const submitHandler = (vals) => {
    console.log(vals);
  };

  const questionsSubmitHandler = (vals) => {
    setQuestions([...questions, vals])
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <SurveyForm submitHandler={submitHandler} questions={questions} />
      <AddCircleIcon
        onClick={() => handleClickOpen()}
        sx={{ fontSize: '3rem', cursor: 'pointer' }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Question</DialogTitle>
        <QuestionForm handleClose={handleClose} submitHandler={questionsSubmitHandler} />
      </Dialog>
    </div>
  );
}

export default Create;
