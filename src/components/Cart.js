import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from '../utils/cartSlice'

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItems())
    }
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <div className='w-6/12 m-auto'>
            <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1 className='m-4 p-4 text-3xl font-semibold'>"Cart is empty.Add something to order"</h1>}
            <ItemList items={cartItems}/>
        </div>
    </div>
  )
}

export default Cart