import React from 'react'

import { Grid, Typography } from '@mui/material'
import { Favorite } from '@mui/icons-material'

import moment from 'moment'

export default function TimeToBaby() {
    
    const dueDate = moment('2024-08-30')
    const today = moment()
    const daysToBaby = dueDate.diff(today, 'days')

  return (
    <Grid container item xs={8} justifyContent='center' >
        <Grid item xs={12} mb={3}>
            <Typography textAlign='center' variant='h5'>Days to Baby Boy...</Typography>
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'  >
            <Favorite sx={{ alignSelf: 'center', mx: 1, color:'#140dd6' }} />
            <Typography textAlign='center' variant='h2'>{daysToBaby} days</Typography>
            <Favorite sx={{ alignSelf: 'center', mx: 1, color:'#140dd6' }} />
        </Grid>
    </Grid>
  )
}
