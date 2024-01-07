import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const handelCheckOut = ()=>{
        navigate('/checkout?step=2')
    }
  return (
    <div className='mt-10'>
    <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 space-y-3">
            {[1,1,1,1].map((item)=><CartItem/>)}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border p-2">
                <p className='uppercase font-bold opacity-60 pb-4'> Price Details</p>
                <hr />

                <div className="space-y-3 font-semibold pb-10">
                    <div className="flex justify-between pt-3 text-black">
                        <span>Price</span>
                        <span>₹1499</span>
                    </div>
                    <div className="flex justify-between pt-3 text-black">
                        <span>Discount</span>
                        <span className="text-green-500">-₹999</span>
                    </div>
                    <div className="flex justify-between pt-3 text-black">
                        <span>Delivery Charge</span>
                        <span className="text-green-500">Free</span>
                    </div>
                    <div className="flex justify-between pt-3 text-black text-bold">
                        <span>Total Amount</span>
                        <span>₹500</span>
                    </div>
                </div>

                      <Button onClick={handelCheckOut} color="secondary" variant="contained" className='w-full mt-6' sx={{ px: '2.5rem', py: '0.7rem', bgcolor:'#BF62F3'}}>
                    Checkout
                </Button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cart