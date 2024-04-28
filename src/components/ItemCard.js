import React from 'react'
import NonVegClassifier from "../components/NonVegClassifier";
import VegClassifier from "../components/VegClassifier";
import RatingIcon from './RatingIcon';
import AddToCartButton from './AddToCartButton';

const ItemCard = ({ item, restaurant }) => {

    return (
        <div>
            {item ? item.card ?
                <div className=' mt-4 mb-4  sm:mb-8 sm:mt-8'>
                    <div>
                        <div>
                            {item.card.info.itemAttribute ?
                                (item.card.info.itemAttribute.vegClassifier === "NONVEG") ?
                                    <NonVegClassifier height={16} width={16} /> : <VegClassifier height={16} width={16} /> : <></>}
                        </div>
                        <div className='flex flex-row'>
                            <div className='w-3/4 sm:w-11/12'>
                                <h3 className='text-md sm:text-lg font-semibold'>{item.card.info.name}</h3>
                                <p>
                                    <span>&#8377;</span>
                                    {Math.floor((item.card.info.price) / 100)}
                                </p>
                                {item.card.info.ratings ?
                                    <div className='flex flex-row mb-2 mt-2'>
                                        <RatingIcon /> {item.card.info.ratings.aggregatedRating.rating}
                                        <span className='text-gray-600 ml-2'>
                                            {'('}{item.card.info.ratings.aggregatedRating.ratingCountV2}{')'}
                                        </span>
                                    </div> : <></>}
                                <p className='text-gray-600 text-wrap mr-2'>
                                    {item.card.info.description}
                                </p>
                            </div>
                            <AddToCartButton item={item} restaurant={restaurant} />
                        </div>
                    </div>


                </div> : <></> : <></>}
            <hr className='mt-2 mb-2 h-0 border-black' />
        </div>
    )
}

export default ItemCard
