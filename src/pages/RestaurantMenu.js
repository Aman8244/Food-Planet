import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { useParams } from "react-router-dom";
import RestaurantData from '../utils/restrodata';
import RatingIcon from '../components/RatingIcon';
import OfferForYou from '../components/OfferForYou';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import SliderButton from '../components/SliderButton';
import { useSelector } from 'react-redux';
import ViewCart from '../components/ViewCart';
import MenuData from '../utils/menudata';
import Footer from '../components/Footer';

const RestaurantMenu = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const cart = useSelector(state => state.cartItem)
    useEffect(() => {
        const res = RestaurantData.card.card.gridElements.infoWithStyle.restaurants.find((value) => {
            return value.info.id === id
        });
        setRestaurant(res)
    }, [id])
    return (
        <>
            <Navbar />
            {(restaurant && restaurant.info) ?
                <div className="ml-2 mt-4 mr-2 sm:ml-40 sm:mt-14 sm:mb-5 sm:mr-40">
                    <div>
                        <div>
                            <h1 className='text-3xl font-bold mb-5'>{restaurant.info.name}</h1>
                            <hr className='h-0 border-gray-400' />
                        </div>
                        <div className='card rounded-xl border-r-1 pb-2 mb-8  border-l-1 border-b-1 bg-gradient-to-b from-white to-gray-200'>
                            <div className='card m-2 sm:m-4 pb-4 pt-2 border-r-2 border-l-2 border-gray-200 border-b-2 rounded-xl bg-white'>
                                <div className='flex flex-row mt-4 ml-2'>
                                    <div>
                                        <RatingIcon />
                                    </div>
                                    <div className='mr-4'>
                                        <span> {restaurant.info.avgRating}</span>
                                    </div>
                                    <span className='mr-4'>
                                        {`(`}{restaurant.info.totalRatingsString} ratings {`)`}
                                    </span>
                                    <li className='mr-4'>{restaurant.info.costForTwo}</li>

                                </div>
                                <div className='ml-4 mb-4 mt-2'>
                                    {restaurant.info.cuisines.map((el, key) => {
                                        return <span className='mr-4 font-semibold underline text-red-500' key={key}>{el},</span>
                                    })}
                                </div>
                                <div className='ml-8'>
                                    <ul className="list-disc flex flex-col">
                                        <li><span className='font-bold mr-6'>Outlet</span>{restaurant.info.locality}, {restaurant.info.areaName}</li>
                                        <li>{restaurant.info.sla.deliveryTime} mins</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {(restaurant.info.aggregatedDiscountInfoV3) ?
                        <div>
                            <h2 className='font-bold text-2xl'>
                                Deals for you
                            </h2>
                            <OfferForYou header={restaurant.info.aggregatedDiscountInfoV3.header} subHeader={restaurant.info.aggregatedDiscountInfoV3.subHeader} />
                        </div> : <></>}
                    <div className="text-center">
                        <div className="inline-block">
                            <img width="10" height="10" src="https://img.icons8.com/ios-glyphs/30/back.png" alt="back" />
                        </div>
                        <div className="inline-block  ml-8 mr-8">MENU</div>
                        <div className='inline-block '>
                            <img width="10" height="10" src="https://img.icons8.com/ios-glyphs/30/forward.png" alt="forward" />
                        </div>
                    </div>
                    <div>
                        <Link to={`/search/menu/${restaurant.info.id}`}>
                            <div className='rounded-xl flex flex-row pt-4 justify-center pb-4 mt-4 mb-4 ml-0 mr-0 text-gray-600 bg-gray-200'>
                                <div className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 50 50">
                                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                    </svg>
                                </div>
                                <p> Search For Dishes</p>
                            </div>
                        </Link>

                        {/* <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/8f98c1c615409b8ce8981a261580f00b`} alt="menu" srcset="" /> */}
                    </div>
                    <div>
                        <SliderButton />
                        <hr className='h-0 border-gray-400' />
                    </div>
                    <div>
                        <Menu restaurant={restaurant} MenuData={MenuData[0].Menudata}/>
                    </div>
                    <ViewCart cart={cart}/>
                </div>
                :
                <h1>Loading...</h1>}
            <Footer/>
        </>
    )
}

export default RestaurantMenu
