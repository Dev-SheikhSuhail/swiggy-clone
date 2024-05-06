import { useState, useEffect } from "react";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    getRestaurant();
  }, []);
  const getRestaurant = async () => {
    const mainApi = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonFmt = await mainApi.json();
    const singleRestaurant =
      jsonFmt?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
        .filter((restaurant) => restaurant.info.id == id)
        .map((restaurant) => restaurant.info);
    setRestaurant(singleRestaurant);
  };
  return restaurant;
};
export default useRestaurant;
