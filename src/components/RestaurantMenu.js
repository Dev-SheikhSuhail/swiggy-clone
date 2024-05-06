import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
import MenuShimmer from "./MenuShimmer";
import useRestaurant from "../utils/useRestaurant";
import useRestMenu from "../utils/useRestMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const restMenuList = useRestMenu(id);

  return restMenuList.length <= 0 ? (
    <MenuShimmer />
  ) : (
    <>
      <p className="underline text-2xl text-center text-blue-700">
        Restaurant Menu
      </p>
      {restaurant.map((rst) => (
        <div className="flex flex-col text-center text-xl">
          <p>Restaurant Name : {rst?.name}</p>
          <p>Locality : {rst?.locality}</p>
          <p>Cuisines : {rst?.cuisines?.join(" , ")}</p>
        </div>
      ))}

      <div className="grid grid-cols-3 gap-24 pt-16">
        {restMenuList.map((restnt) => (
          <div className="flex flex-col items-center">
            <img
              className="w-5/6 h-56 rounded-3xl"
              src={IMG_URL + restnt?.imageId}
            ></img>
            <p>{restnt?.name}</p>
            <p>ID : {restnt?.id}</p>
            <p className="flex gap-5">
              <span>Stock : {restnt?.inStock}</span>
              <span>Price : {restnt?.price / 100}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default RestaurantMenu;
