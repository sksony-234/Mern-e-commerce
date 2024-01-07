import { Button, IconButton } from '@mui/material'
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className="flex items-center">
            <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                <img 
                    className="w-full h-full object-cover object-top"
                      src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71KgYt8vV7L._AC_UL320_.jpg" 
                    alt="" 
                />
            </div>

            <div className="ml-5 space-y-1">
                <p className="font-semibold">Yash Gallery</p>
                <p className="opacity-70">Size: L, Yellow</p>
                <p className="opacity-70 mt-2">Seller: Ravish Cnadra 2fashion</p>
                <div className="flex item-center space-x-5 text-gray-900 pt-2">
                    <p className='font-semibold'>₹199</p>
                    <p className='line-through opacity-50'>₹1499</p>
                    <p className='text-green-600 font-semibold'>78% off</p>
                </div>
            </div>
        </div>

        <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton>
                    <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className="py-1 px-7 border rounded-sm">3</span>
                  <IconButton sx={{ color:"#BF62F3"}}>
                    <AddCircleOutlineIcon/>
                </IconButton>
            </div>
            <div>
                <Button sx={{ color: "#BF62F3" }} >remove</Button>
            </div>
        </div>

    </div>
  )
}

export default CartItem