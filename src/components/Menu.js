import React, { useEffect, useState } from 'react'
import MenuCard from './MenuCard';

const Menu = ({restaurant,MenuData}) => {
  const [menu, setMenu] = useState([]);
  
  useEffect(() => {
    setMenu(MenuData);
  }, [MenuData])
  return (
    <div>
      {(menu && menu[0]) ?
        <div>
          {menu.map((el) => {
            return (
              <MenuCard restaurant={restaurant} el={el}/>
            )
          })}
        </div> : <></>}
    </div>
  )
}

export default Menu
