import React from 'react'
import { useQuery } from '@tanstack/react-query';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

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
    <nav aria-label="main mailbox folders">
        <Box sx={{width: '80%', margin: 'auto', marginBlockStart: '2rem'}}>
          <List>
            {questions.map((question, i) => {
              return (
                <ListItem disablePadding key={i}>
                  <ListItemButton>
                    <ListItemText primary={question.question} />
                  </ListItemButton>
                </ListItem>
              )
            })}
            {/* <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem> */}
          </List>
        </Box>
      </nav>
  )
}

export default Page