import React from 'react'

import { Grid, Typography } from '@mui/material'
import { Pets } from '@mui/icons-material'

import moment from 'moment'

export default function TimeForSafari() {

    const arrivalDate = moment('2025-07-27')
    const today = moment()
    const daysToArrival = arrivalDate.diff(today, 'days')

  return (
    <Grid container item xs={8} justifyContent='center' >
        <Grid item xs={12} mb={3}>
            <Typography textAlign='center' variant='h5'>Days to Safari</Typography>
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'  >
            <Pets sx={{ alignSelf: 'center', mx: 1, color:'#44874b', fontSize: 50 }} />
            <Typography textAlign='center' variant='h2'>{daysToArrival} days</Typography>
            <Pets sx={{ alignSelf: 'center', mx: 1, color:'#44874b', fontSize: 50 }} />
        </Grid>
    </Grid>
  )
}
