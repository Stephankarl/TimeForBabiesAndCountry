import React from 'react'

import { Grid, Typography } from '@mui/material'

import moment from 'moment'

export default function TimeForCountry({ date, title }) {

    const eventDate = moment(date)
    const today = moment()
    const daysCount = eventDate.diff(today, 'days') 


    if(daysCount >= 0) {
        return (
            <Grid container item xs={8} justifyContent='center' >
                <Grid item xs={12} mb={3}>
                    <Typography textAlign='center' variant='h5'>{title}</Typography>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='center'>
                    <Typography textAlign='center' variant='h2'>{daysCount} days</Typography>
                </Grid>
            </Grid>
        )
    }
    return null
}
