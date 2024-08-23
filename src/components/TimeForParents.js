import React from 'react'

import { Grid, Typography } from '@mui/material'
import { Hail } from '@mui/icons-material'

import moment from 'moment'

export default function TimeForParents() {

    const arrivalDate = moment('2024-12-18')
    const today = moment()
    const daysToArrival = arrivalDate.diff(today, 'days') + 1

  return (
    <Grid container item xs={8} justifyContent='center' >
        <Grid item xs={12} mb={3}>
            <Typography textAlign='center' variant='h5'>Days to Parents Arriving</Typography>
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'  >
            <Hail sx={{ alignSelf: 'center', mx: 1, color:'#03fc20', fontSize: 50 }} />
            <Typography textAlign='center' variant='h2'>{daysToArrival} days</Typography>
            <Hail sx={{ alignSelf: 'center', mx: 1, color:'#03fc20', fontSize: 50 }} />
        </Grid>
    </Grid>
  )
}
