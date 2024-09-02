import { Grid, Typography } from '@mui/material';
import DateCounter from './components/DateCounter';

function App() {
  return (
    <Grid container justifyContent='center' spacing={3} my={3}>
      <Grid item xs={12} my={3}>
        <Typography textAlign='center' variant='h2'>Upcoming Events</Typography>
      </Grid>
      <DateCounter date='30 Aug 2024' title='Time For Baby' />
      <DateCounter date='1 Oct 2024' title='Time For Country' />
      <DateCounter date='18 Dec 2024' title='Time For Family' />
      <DateCounter date='27 Jul 2025' title='Time For Safari' />
    </Grid>
  );
}

export default App;
