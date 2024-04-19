import React from 'react'
import { Navbar } from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useUser } from "@clerk/clerk-react";
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
                <div className='flex flex-row m-0 pt-4 pb-4 bg-gray-400'>
                    <div className='w-70p'>
                        <div className='bg-white p-4 ml-8 mt-4 border-black'>
                            <h1 className='flex text-3xl font-bold flex-row'>
                                Logged In
                                <span className='ml-8'><img width="38" height="38" src="https://img.icons8.com/color/48/ok--v1.png" alt="ok--v1" /></span>
                            </h1>
                            <h2 className='text-xl mt-4 '>
                                Hi! {user.fullName}
                            </h2>
                        </div>
                        <div className='bg-white p-4 ml-8 mt-4 - border-black'>
                            <h1 className='flex text-3xl font-bold flex-row'>
                                Add a delivery address
                            </h1><br />
                            <form>
                                <label htmlFor="Address" className='text-xl '>Address</label><br />
                                <input className='w-full border border-black mt-2 mb-2 p-4 rounded-sm' type="text" id='Address' />
                                <br />
                                <label htmlFor="FlatNo" className='text-xl '>Door/Flat No</label><br />
                                <input className='w-full border border-black mt-2 mb-2 p-4 rounded-sm' type="text" id='FlatNo' />
                                <br />
                                <label htmlFor="Landmark" className='text-xl '>Landmark</label><br />
                                <input className='w-full border border-black mt-2 mb-2 p-4 rounded-sm' type="text" id='Landmark' />
                                <button className='p-2 text-xl text-white bg-orange-500 border-2 border-black'>Add</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className='bg-white p-4 ml-8 mt-4 mr-8 border-black'>
                            <div>
                                {cart[0].restaurant ?
                                    <div>
                                        <h2 className='text-xl font-semibold'>{cart[0].restaurant.info.name}</h2>
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
                                            <div className=''>
                                                {el.card.info.name}
                                            </div>
                                            <div className='ml-8'>
                                                <div className='flex  flex-row text-green-600 font-bold rounded-md border-2 border-gray-800'>
                                                    <button className='text-2xl p-1 w-33p hover:bg-gray-200' onClick={() => ReduceByOne(el.quantity, el)}>-</button>
                                                    <span className='text-2xl w-34p mt-1 ml-4 mr-4'>
                                                        {el.quantity}
                                                    </span>
                                                    <button className='p-1 w-33p hover:bg-gray-200 text-2xl' onClick={() => AddByOne(el.quantity, el)}>+</button>
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
