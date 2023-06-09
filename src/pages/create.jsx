import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useStore, { selectUser } from '@/store/store';
// import { addSurvey } from '@/firebase/controllers';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SurveyForm from '@/components/forms/SurveyForm';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import QuestionForm from '@/components/forms/QuestionForm';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SnackBar from '@/components/SnackBar';

function Create() {
  let router = useRouter();
  const user = useStore(selectUser);
  const [open, setOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [titleVal, setTitleVal] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!user) {
      router.push('/sign-up');
    }
  }, [user, router]);

  const questionsSubmitHandler = (vals) => {
    setQuestions([...questions, vals]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackClose = () => {
    setSnackBarOpen(false);
  };

  const handleTitleChange = (e) => {
    setTitleVal(e.target.value);
  };

  const surveySubmit = () => {
    if (titleVal === '') {
      setTitleError(true);
    } else {
      // addSurvey(user, titleVal, questions);
      setTitleVal('');
      setTitleError(false);
      setQuestions([]);
      setSnackBarOpen(true);
    }
  };

  const reset = () => {
    setTitleVal('');
    setQuestions([]);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <Typography
        component="h2"
        variant="h3"
        sx={{ textDecoration: 'underline', marginBlockEnd: '2rem' }}
      >
        Create a Survey
      </Typography>
      <div className="flex items-center gap-4 mb-8">
        <Typography component="p" variant="h5">
          Survey Title:{' '}
        </Typography>
        <TextField
          value={titleVal}
          error={titleError}
          helperText={titleError ? 'Title cannot be empty' : ''}
          onChange={handleTitleChange}
          variant="standard"
          inputProps={{ style: { fontSize: '1.5rem' } }}
        />
      </div>
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
      <SnackBar snackBarOpen={snackBarOpen} snackBarClose={handleSnackClose} />
    </div>
  );
}

export default Create;
