import * as React from 'react';
import { useRouter } from 'next/router';
import useStore, { selectUser } from '@/store/store';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SurveyCard({ title, btn1 = '', btn2, _id, type }) {
  const router = useRouter();
  const user = useStore(selectUser);
  let btn2Click = () => {};

  const btn1Click = () => {
    router.push(`/user/${user.uid}/edit/${_id}`);
  };

  if (type === 'answer') {
    btn2Click = () => {
      router.push(`/answer/${_id}`);
    };
  } else {
    btn2Click = () => {
      router.push(`/user/${user.uid}/answers/${_id}`);
    };
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        {btn1 ? (
          <Button color="secondary" variant="contained" size="small" onClick={() => btn1Click()}>
            {btn1}
          </Button>
        ) : (
          ''
        )}
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={() => btn2Click()}
        >
          {btn2}
        </Button>
      </CardActions>
    </Card>
  );
}
