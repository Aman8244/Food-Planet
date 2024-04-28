import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, reduceByOne, addByOne } from "../store/slice/cartSlice";

const AddToCartButton = ({ item, restaurant }) => {
    const quantity = useRef(0);
    const [itemCount, setItemCount] = useState(quantity.current);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartItem);
    useEffect(() => {
        cart ?
            cart.find((el) => {
                if (el._id === item._id) {
                    quantity.current = el.quantity
                    setItemCount(quantity.current)
                }
                return el
            }) : quantity.current=0

    },[cart,item])
    const handler = () => {
        quantity.current += 1;
        setItemCount(parseInt(quantity.current))
        console.log(item)
        if (cart.find((el) => {
            return (el._id === item._id)
        })) {
            dispatch(addByOne({
                id: item._id,
                restaurantId: restaurant.info.id
            }))
        }
        else {
            dispatch(addItem({
                ...item,
                quantity: 1,
                restaurant: restaurant,
                restaurantId: restaurant.info.id
            }));
        }
        // console.log(cart)
    }
    const ReduceByOne = () => {
        quantity.current -= 1;
        setItemCount(parseInt(quantity.current));
        if (itemCount !== 1) {
            dispatch(reduceByOne({
                id: item._id,
                restaurantId: restaurant.info.id
            }))
        } else {
            dispatch(removeItem({
                id: item._id,
                restaurantId: restaurant.info.id
            }))
        }
        console.log(cart)

    }
    const AddByOne = () => {
        quantity.current += 1;
        setItemCount(parseInt(quantity.current));
        if (itemCount <= 100) {
            dispatch(addByOne({
                id: item._id,
                restaurantId: restaurant.info.id
            }))
        }
        console.log(cart)

    }

    return (
        <div className='mt-90p w-1/4 sm:w-1/4'>
            {(itemCount === 0) ?
                <button onClick={handler} className='text-green-600 font-bold rounded-md border-2 pl-4 pr-4 pb-1 pt-1 border-gray-800'>Add</button>
                : <div className='flex  flex-row text-green-600 font-bold rounded-md border-2 border-gray-800'>
                    <button className='text-md sm:text-2xl p-1 w-1/3 hover:bg-gray-200' onClick={ReduceByOne}>-</button>
                    <span className='text-md sm:text-2xl w-1/3 mt-1  sm:ml-4 sm:mr-4'>
                        {itemCount}
                    </span>
                    <button className='p-1 w-1/3 hover:bg-gray-200 text-md sm:text-2xl' onClick={AddByOne}>+</button>
                </div>
            }
        </div>
    )
}

export default AddToCartButton
