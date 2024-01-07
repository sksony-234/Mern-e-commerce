import { Grid } from '@mui/material'
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-gray-500 hover:shadow-2xl border">
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className="flex cursor-pointer">
                    <img 
                        src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71KgYt8vV7L._AC_UL320_.jpg" 
                        alt="" 
                        className="w-[5rem] h-[5rem] object-cover object-top" 
                    />
                    <div className="ml-5 space-y-2">
                          <p className="">Women's Cotton Patch Work Straight Top for Women</p>
                          <p className="opacity-50 text-xs font-semibold">Size: M</p>
                          <p className="opacity-50 text-xs font-semibold">Color: Yellow</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                  <p>₹1999</p>
            </Grid>

            <Grid item xs={4}>
                {true && <div>
                    <p>
                        <AdjustIcon
                            sx={{ width: '15px', height: "15px" }}
                            className='text-green-600 mr-2 text-sm'
                        />
                        <span>Delivered On Feb 30</span>
                    </p>
                    <p className="text-xs opacity-50">
                        Your Item has been delivered
                    </p>
                </div> }
                {false && <p>
                    <span>Expected Delivery on Feb 30</span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard