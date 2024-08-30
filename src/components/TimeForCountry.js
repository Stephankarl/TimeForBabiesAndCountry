import React from 'react'

import { Grid, Typography } from '@mui/material'
import { MusicNote } from '@mui/icons-material'

import moment from 'moment'

export default function TimeForCountry() {

    const moveDate = moment('2024-10-01')
    const today = moment()
    const daysToCountry = moveDate.diff(today, 'days') 

  return (
    <Grid container item xs={8} justifyContent='center' >
        <Grid item xs={12} mb={3}>
            <Typography textAlign='center' variant='h5'>Time For Country</Typography>
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'  >
            <MusicNote sx={{ alignSelf: 'center', mx: 1, color:'#d60d0d', fontSize: 70 }} />
            <Typography textAlign='center' variant='h2'>{daysToCountry} days</Typography>
            <MusicNote sx={{ alignSelf: 'center', mx: 1, color:'#d60d0d', fontSize: 70 }} />
        </Grid>
    </Grid>
  )
}
