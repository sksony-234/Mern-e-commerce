import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../addressCard/AddressCard'

const DeliveryAddressForm = () => {
    const handelSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobileNumber: data.get("phoneNumber"),
        }
        console.log("address", address )
    }
  return (
    <div>
        <Grid container>
            <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
            <div className="p-5 py-7 border-b cursor-pointer">
                <AddressCard />
                <Button sx={{mt:2, bgcolor:"RGB(145, 85, 253)"}} size='large' variant='contained' color="secondary">
                    Deliver Here
                </Button>
            </div>
            </Grid>

            <Grid item sx={12} lg={7} className="lg:px-10">
                <Box className='border rounded-s-md shadow-md p-5'>
                    <form onSubmit={handelSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    fullWidth
                                    autoComplete='first-name'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    fullWidth
                                    autoComplete='last-name'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address"
                                    name="address"
                                    label="Address"
                                    fullWidth
                                    autoComplete='address'
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete='city'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="state"
                                    name="state"
                                    label="State/Province/Region"
                                    fullWidth
                                    autoComplete='state'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip/Postal Code"
                                    fullWidth
                                    autoComplete='zip-code'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    fullWidth
                                    autoComplete='phone-number'
                                />
                            </Grid>
                            <Grid item xs={12} className='flex items-center justify-center'>
                                <Button
                                    sx={{ mt: 2, bgcolor: "RGB(145, 85, 253)" }} 
                                    size='large' variant='contained' 
                                    color="secondary"
                                    type="submit"
                                >
                                    Deliver Here
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default DeliveryAddressForm