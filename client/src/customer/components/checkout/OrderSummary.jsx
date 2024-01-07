import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
        <div className="p-5 shadow-lg rounded-s-md border">
            <AddressCard/>
        </div>
          <div className="lg:grid grid-cols-3 relative mt-3">
              <div className="col-span-2 space-y-3">
                  {[1, 1, 1, 1].map((item) => <CartItem />)}
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

                      <Button color="secondary" variant="contained" className='w-full mt-6' sx={{ px: '2.5rem', py: '0.7rem', bgcolor: '#BF62F3' }}>
                          Checkout
                      </Button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default OrderSummary