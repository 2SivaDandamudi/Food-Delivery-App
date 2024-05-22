import { useEffect, useState } from 'react';
import React from 'react'

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)
  
 useEffect(() => {
  fetchMenu()
 }, []);

 const fetchMenu = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json()
  console.log(json.data)
  setResInfo(json.data)
 }

 if(resInfo === null) {
   return <h1> opps </h1>
 }


  return (
    <div className='menu'>
        <h1>{resInfo?.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name} </h1>
        <h3>{resInfo?.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.cuisines.join(", ")}  </h3>
        <h3>{resInfo?.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.costForTwo}  </h3>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Soft Drinks</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu