import { Grid, Typography } from '@mui/material';

import TimeToBaby from './components/TimeToBaby';
import TimeForCountry from './components/TimeForCountry';
import TimeForParents from './components/TimeForParents';
import TimeForSafari from './components/TimeForSafari';

function App() {
  return (
    <Grid container justifyContent='center' spacing={3} my={3}>
      <Grid item xs={12} my={3}>
        <Typography textAlign='center' variant='h2'>Time for babies and country</Typography>
      </Grid>
      <TimeToBaby />
      <TimeForCountry />
      <TimeForParents />
      <TimeForSafari />
    </Grid>
  );
}

export default App;
