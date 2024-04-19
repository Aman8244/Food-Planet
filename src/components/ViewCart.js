import React from 'react'
import { Link } from 'react-router-dom'
const ViewCart = ({cart}) => {
    return (
        <>
            <div className='relative text-white font-bold'>
                {cart ? cart[0] ?
                    <div className='bg-green-600 bottom-0 w-90p fixed p-4 flex flex-row'>
                        <div className='w-90p'>
                            {cart.length} items added
                        </div>
                        <div>
                            <Link to={"/cart"}>
                                View Cart
                            </Link>
                        </div>
                        <div className='ml-2'>
                            <Link to={"/cart"}>
                                <img width="20" height="20" src="https://img.icons8.com/parakeet-line/48/FFFFFF/shopping-bag.png" alt="shopping-bag" />
                            </Link>
                        </div>
                    </div> : <></> : <></>}
            </div>
        </>
    )
}

export default ViewCart
