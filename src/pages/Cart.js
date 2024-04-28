import React from 'react'
import { Navbar } from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignInButton, useUser } from "@clerk/clerk-react";
import { removeItem, reduceByOne, addByOne } from "../store/slice/cartSlice";

const Cart = () => {
    const cart = useSelector(state => state.cartItem);
    const { user, isLoaded } = useUser();
    const dispatch = useDispatch();

    const ReduceByOne = (itemCount, item) => {

        if (itemCount !== 1) {
            dispatch(reduceByOne({
                id: item._id,
                restaurantId: cart[0].restaurant.info.id
            }))
        } else {
            dispatch(removeItem({
                id: item._id,
                restaurantId: cart[0].restaurant.info.id
            }))
        }
        console.log(cart)

    }
    const AddByOne = (itemCount, item) => {
        if (itemCount <= 100) {
            dispatch(addByOne({
                id: item._id,
                restaurantId: cart[0].restaurant.info.id
            }))
        }
        console.log(cart)

    }
    if (!isLoaded) {
        return <div>
            Loading...
        </div>;
    }



    return (
        <>
            <Navbar />
            {cart ? cart[0] ?
                <div className='min-h-screen m-0 pt-10 sm:pt-4  bg-gray-400'>
                    <div className='w-full sm:w-3/4 lg:w-3/5'>
                        <div className='bg-white p-4 ml-8 mt-4 mr-8 border-black'>
                            <div>
                                {cart[0].restaurant ?
                                    <div>
                                        <h2 className='text-lg sm:text-xl font-semibold'>{cart[0].restaurant.info.name}</h2>
                                        <p>
                                            {cart[0].restaurant.info.locality}
                                        </p>
                                        <hr className='w-34p h-0 border-black border-2 mt-4' />
                                    </div> : <></>}
                            </div>
                            <div>
                                {cart ? cart.map((el) => {
                                    return (
                                        <div className='flex flex-row mt-8'>
                                            <div className='w-3/5'>
                                                {el.card.info.name}
                                            </div>
                                            <div className='ml-8'>
                                                <div className='flex  flex-row text-green-600 font-bold rounded-md border-2 border-gray-800'>
                                                    <button className='text-lg sm:text-2xl p-1 w-1/3 hover:bg-gray-200' onClick={() => ReduceByOne(el.quantity, el)}>-</button>
                                                    <span className='text-lg sm:text-2xl w-1/3 mt-1 ml-4 mr-4'>
                                                        {el.quantity}
                                                    </span>
                                                    <button className='text-lg p-1 w-1/3  hover:bg-gray-200 sm:text-2xl' onClick={() => AddByOne(el.quantity, el)}>+</button>
                                                </div>
                                            </div>
                                            <div className='ml-8'>
                                                <span>&#8377;</span>
                                                {Math.floor((el.card.info.price) / 100) * (el.quantity)}
                                            </div>
                                        </div>
                                    )
                                }) : <></>}
                            </div>
                            {(!user) ?
                                <>
                                    <div className='mt-10'>
                                        <hr />
                                        <h1>
                                            Place Order
                                        </h1>
                                        <h2 className='text-2xl'>
                                            You aren't Signed In
                                        </h2>
                                        <p>Please sign in</p>
                                        <SignInButton>
                                            <button className='border bg-green-500 text-white border-gray-400 rounded-lg w-full p-2 mt-4'>
                                                Sign In
                                            </button>
                                        </SignInButton>
                                    </div>
                                </> : <>
                                    <div className='mt-10'>
                                        <hr />
                                        <button className='w-full mt-6 p-2 rounded-lg bg-orange-600 text-white'>
                                            Place Order
                                        </button>
                                    </div>

                                </>

                            }
                        </div>

                    </div>
                </div> :
                <div>
                    <div className=' mt-20 text-center'>
                        <div className='mb-8 flex justify-center items-center'>
                            <img className='text-center' height={250} width={250} src='https://shidory.com/assets/images/empty_cart.webp' alt='empty cart' />
                        </div>
                        <p className='mb-2 text-xl text-gray-600 font-bold'>Your cart is empty</p>
                        <p className='text-gray-400'>you can go to home page to view more restaurant</p>
                        <div className='mt-8'>
                            <Link className='p-4 bg-orange-600 text-white font-bold' to={"/"}>
                                SEE RESTAURANT NEAR YOU
                            </Link>
                        </div>
                    </div>
                </div> :
                <>
                </>}
        </>
    )
}

export default Cart
