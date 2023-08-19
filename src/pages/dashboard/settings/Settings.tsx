import { Button, Box, FormControl, FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material";
import React, { useState } from "react";

const Settings = () => {
    const [showRevenue, setShowRevenue] = useState(true)
    const [showProfit, setShowProfit] = useState(true)
    const [showOrders, setShowOrders] = useState(true)
    const [showCustomers, setShowCustomers] = useState(true)

    const handleShowRevenueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowRevenue(event.target.checked)
    }

    const handleShowProfitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowProfit(event.target.checked)
    }

    const handleShowOrdersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowOrders(event.target.checked)
    }

    const handleShowCustomersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowCustomers(event.target.checked)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <>
            <h1>Settings</h1>
            <Box>
                <Typography variant="h4" gutterBottom>Dashboard Features</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl component='fieldset'>
                                <FormGroup>
                                    <FormControlLabel 
                                        control={
                                            <Switch 
                                                checked={showRevenue}
                                                onChange={handleShowRevenueChange}   
                                            />
                                        }
                                        label='Revenue'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControlLabel 
                                        control={
                                            <Switch 
                                                checked={showProfit}
                                                onChange={handleShowProfitChange}   
                                            />
                                        }
                                        label='Profit'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControlLabel 
                                        control={
                                            <Switch 
                                                checked={showOrders}
                                                onChange={handleShowOrdersChange}   
                                            />
                                        }
                                        label='Orders'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <FormControlLabel 
                                        control={
                                            <Switch 
                                                checked={showCustomers}
                                                onChange={handleShowCustomersChange}   
                                            />
                                        }
                                        label='Customers'
                                    />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit" variant='contained' color='primary'
                            >Save Settings</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    )
}

export default Settings