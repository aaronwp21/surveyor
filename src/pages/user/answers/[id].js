import React from 'react';
import { useQuery } from '@tanstack/react-query';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

  return (
    <div className='w-[80%] m-auto mt-8'>
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
  // <nav aria-label="main mailbox folders">
  //     <Box sx={{width: '80%', margin: 'auto', marginBlockStart: '2rem'}}>
  //       <List>
  //         {questions.map((question, i) => {
  //           return (
  //             <ListItem disablePadding key={i}>
  //               <ListItemButton>
  //                 <ListItemText primary={question.question} />
  //               </ListItemButton>
  //             </ListItem>
  //           )
  //         })}
  //       </List>
  //     </Box>
  //   </nav>
}

export default Page;
