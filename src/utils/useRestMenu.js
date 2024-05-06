import { useState, useEffect } from "react";
const useRestMenu = (id) => {
  const [restMenuList, setRestMenuList] = useState([]);
  useEffect(() => {
    getRestaurantData();
  }, []);
  const getRestaurantData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=12.9715987&lng=77.5945627&restaurantId=${id}`
    );
    const jsonFormat = await data.json();
    const restData =
      jsonFormat?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
        (item) => item.card.info
      );
    setRestMenuList(restData);
  };
  return restMenuList;
};
export default useRestMenu;
