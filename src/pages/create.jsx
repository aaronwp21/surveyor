import React, { useState } from 'react';
import useStore, { selectUser } from '@/store/store';
import { addSurvey } from '@/firebase/controllers';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SurveyForm from '@/components/forms/SurveyForm';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import QuestionForm from '@/components/forms/QuestionForm';
import Button from '@mui/material/Button';

function Create() {
  const user = useStore(selectUser);
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState([]);

  const questionsSubmitHandler = (vals) => {
    setQuestions([...questions, vals]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const surveySubmit = () => {
    addSurvey(user, questions);
  };

  const reset = () => {
    setQuestions([]);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <Typography
        component="h2"
        variant="h3"
        sx={{ textDecoration: 'underline', marginBlockEnd: '4rem' }}
      >
        Create a Survey
      </Typography>
      <SurveyForm questions={questions} canAnswer={false} />
      <AddCircleIcon
        onClick={() => handleClickOpen()}
        sx={{ fontSize: '3rem', cursor: 'pointer', marginBlockEnd: '1rem' }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a Question</DialogTitle>
        <QuestionForm
          handleClose={handleClose}
          submitHandler={questionsSubmitHandler}
        />
      </Dialog>
      {questions.length === 0 ? (
        ''
      ) : (
        <div className="flex justify-center">
          <Button
            type="reset"
            onClick={() => reset()}
            variant="contained"
            sx={{ mr: 2 }}
          >
            Reset
          </Button>
          <Button
            onClick={() => surveySubmit()}
            type="submit"
            primary="true"
            variant="contained"
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}

export default Create;
