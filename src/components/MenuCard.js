import React from 'react'
import ItemCard from './ItemCard'
import { useState } from 'react';
const MenuCard = ({ el ,restaurant}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (
        <>
            <div className='mb-8'>
                {(el.card && el.card.card && el.card.card.title)?
                    <div onClick={toggleCollapse} className='flex flex-row'>
                        <h3 className='text-2xl w-90 font-bold'>
                            {el.card.card.title} {el.card.card.itemCards ? <span>
                                {'('}{el.card.card.itemCards.length}{')'}</span> : <></>}
                        </h3> 
                        <div className="w-10 absolute right-40">
                            {isCollapsed ? <img width="30" height="30" src="https://img.icons8.com/ios/50/expand-arrow--v2.png" alt="expand-arrow--v2" />
                                : <img width="30" height="30" src="https://img.icons8.com/ios/50/collapse-arrow--v2.png" alt="collapse-arrow--v2" />}
                        </div>
                    </div> : <></>}

                {!isCollapsed && (
                    <div>
                        {el.card.card.itemCards.map((item) => {
                            return (<ItemCard item={item} restaurant={restaurant} />)
                        })}
                    </div>
                )}

            </div>

        </>
    )
}

export default MenuCard
