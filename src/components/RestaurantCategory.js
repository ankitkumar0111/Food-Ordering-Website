import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    console.log("data",data)


    const handleClick = () => {
        // setShowItems(!showItems)
        setShowIndex(!showItems);
    }    
    return (
        <div>
        <div className="w-6/12 mx-auto shadow-lg my-4  bg-gray-50 p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
        </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
        </div>
    )
}
export default RestaurantCategory;