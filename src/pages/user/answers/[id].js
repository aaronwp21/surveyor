import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PieChart from '@/components/PieChart';

function Page() {
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
    <div className="w-[80%] m-auto mt-8">
      {questions.map((question, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{question.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-4'>
                  {answers.map((answer, idx) => {
                    return <p key={i} className='border-b-2 border-black'>{`${idx + 1}. ${answer[`question${i}`]}`}</p>;
                  })}
                </div>
                {question.type === 'choice' ? <PieChart labels={answers.map((element) => {
                  return element[`question${i}`];
                })} /> : ''}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default Page;
