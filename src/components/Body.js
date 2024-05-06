import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/common";
import useOnline from "../utils/useOnline";

const BodyComp = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [updatedRestaurants, setUpdatedRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const gridRestaurant = jsonData.data.cards
      .filter((item) => item.card.card.id == "top_brands_for_you")
      .map((item) => {
        return item.card.card.gridElements.infoWithStyle.restaurants;
      })[0];
    setRestaurants(gridRestaurant);
    setUpdatedRestaurants(gridRestaurant);
  }

  // Online or Offline
  const online = useOnline();
  if (!online) {
    return <p>You are offline. Please check your internet connection!!!</p>;
  }

  if (!restaurants) return null;

  return (
    <>
      <div className="flex justify-end py-8 px-0">
        <input
          type="text"
          className="w-96 h-10 bg-slate-200 pl-1 outline-none text-black rounded-l-lg border-none"
          placeholder="Search Here"
          value={searchRestaurant}
          onChange={(evt) => {
            setSearchRestaurant(evt.target.value);
          }}
          onKeyDown={(evt) => {
            if (evt.key == "Enter") {
              const getData = filterData(searchRestaurant, restaurants);
              setUpdatedRestaurants(getData);
            }
          }}
        />
        <button
          className="bg-orange-700 rounded-r-lg py-1 px-4"
          onClick={() => {
            getData = filterData(searchRestaurant, restaurants);
            setUpdatedRestaurants(getData);
          }}
        >
          Search
        </button>
      </div>
      {restaurants.length <= 0 ? (
        <Shimmer />
      ) : updatedRestaurants.length <= 0 ? (
        <p className="text-2xl text-center">
          Sorry! No Restaurant Found For Your Search.
        </p>
      ) : (
        <div className="grid grid-cols-4 place-items-center gap-5">
          {/* {RestaurantList.map((restaurant) => { */}
          {updatedRestaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.info} />;
          })}
        </div>
      )}
    </>
  );
};
export default BodyComp;
