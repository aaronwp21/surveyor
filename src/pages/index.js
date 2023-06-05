import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        <Typography variant="h4" component="h1" color="secondary">
          Welcome to Surveyor. What would you like to do?
        </Typography>
        <div className="flex gap-24">
          <Button variant="contained" color="primary" size="large" sx={{borderRadius: '12px'}}>
            Create a Survey
          </Button>
          <Button variant="contained" color="secondary" size="large" sx={{borderRadius: '12px'}}>
            Answer a Survey
          </Button>
        </div>
      </div>
    </div>
  );
}
