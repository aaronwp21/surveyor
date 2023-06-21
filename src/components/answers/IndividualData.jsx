import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function IndividualData() {
  const origin = window.location.origin;
  const id = window.location.href.match(/(?<=answer.)[^\]]+/)[0];
  const path = `${origin}/api/v1/answers/${id}`;

  const { isLoading, error, data } = useQuery({
    queryKey: ['survey'],
    queryFn: () =>
      fetch(path).then((res) => {
        return res.json();
      }),
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const questions = data.surveys[1];
  const answers = data.answers;

  return (
    <>
      {answers.map((answer, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{`Answer ${i + 1}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col gap-4">
                {questions.map((question, i) => {
                  return (
                    <div key={i}>
                      <Typography sx={{ textDecoration: 'underline' }}>
                        {question.question}
                      </Typography>
                      <ol className='list-disc'>
                        <li className='ml-8 font-bold'>{answer[`question${i}`]}</li>
                      </ol>
                    </div>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}

export default IndividualData;
