import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SurveyCard({ title, btn1, btn2 }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='secondary' variant='contained' size="small">{btn1}</Button>
        <Button color='primary' variant='contained' size="small">{btn2}</Button>
      </CardActions>
    </Card>
  );
}