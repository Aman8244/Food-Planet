import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { useParams } from 'react-router-dom'
import RestaurantData from '../utils/restrodata'
import MenuData from '../utils/menudata'
import ItemCard from '../components/ItemCard'
import ViewCart from '../components/ViewCart'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'

const SearchMenu = () => {
  const { restaurantId } = useParams();
  const [restro, setRestro] = useState({});
  const [searchMenuItem, setSearchMenuItem] = useState([]);
  const cart = useSelector(state => state.cartItem);
  useEffect(() => {
    setRestro(RestaurantData.card.card.gridElements.infoWithStyle.restaurants.find((el) => {
      return (el.info.id === restaurantId)
    }))
  }, [restaurantId])

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.value;
    if (searchQuery === '') {
      setSearchMenuItem([])
    }
    else {
      setSearchMenuItem(MenuData[0].Menudata.map((el) => {
        return (el.card.card.itemCards.filter((item) => {
          return (item.card.info.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.card.info.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.card.info.description.toLowerCase().includes(searchQuery.toLowerCase()))
        }))
      }))
    }
  }
  console.log(searchMenuItem)

  return (
    <>
      <Navbar />
      <div className='ml-4 mr-4 mt-8 mb-2 sm:ml-40 sm:mt-14 sm:mb-5 sm:mr-40'>
        <div className='flex flex-row'>
          <svg className='mt-3' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
          {(restro && restro.info) ? <input onChange={handleSearch} className='p-2 ml-2 mr-0 mt-0 mb-0 border-0 w-full focus:outline-none' type="text" placeholder={`Search in ${restro.info.name} `} />
            : <></>}

        </div>
        <hr className='h-0 border border-gray-200' />
        {(searchMenuItem && searchMenuItem[0]) ?
          <div>
            {searchMenuItem.map((el) => {
              return el.map((item, key) => {
                return <ItemCard item={item} restaurant={restro} key={key} />
              })
            })}
          </div> : <></>}
        <ViewCart cart={cart} />
      </div>
      <Footer/>
    </>
  )
}

export default SearchMenu
