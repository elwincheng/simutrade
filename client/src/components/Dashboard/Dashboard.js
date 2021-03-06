import React, { useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import Cash from './Cash'
import Assets from './Assets'
import Portfolio from './Portfolio'

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem('profile'))

	if (!user) {
		window.location.href="/login"
	}

	return (
		<Grid container spacing={3}>
			 <Grid item lg={4} sm={6} xl={3} xs={12}>
					<Cash cash={user?.result?.cash?.toFixed(2)}/>
			 </Grid>
			 <Grid item lg={4} sm={6} xl={4} xs={12}>
				 <Assets />
			</Grid>
			 <Grid item lg={4} sm={6} xl={4} xs={12}>
				 <Portfolio />
			 </Grid>
		</Grid>
	)	
}

export default Dashboard