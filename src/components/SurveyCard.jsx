import * as React from 'react';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SurveyCard({ title, btn1, btn2, id, type }) {
  const router = useRouter();
  let btn2Click = () => {}

  if(type === 'answer') {
    btn2Click = () => {
      router.push(`/answer/${id}`)
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='secondary' variant='contained' size="small">{btn1}</Button>
        <Button color='primary' variant='contained' size="small" onClick={() => btn2Click()}>{btn2}</Button>
      </CardActions>
    </Card>
  );
}