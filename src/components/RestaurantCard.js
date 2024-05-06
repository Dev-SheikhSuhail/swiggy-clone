import { IMG_URL } from "../constants";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
// const RestaurantCard = (props) => {
// const RestaurantCard = ({ restaurant }) => {
// const RestaurantCard = ({ restaurant }) => {
// Destructuring on the fly.
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
  id,
}) => {
  // Destructuring
  // const { cloudinaryImageId, name, cuisines, avgRating, sla } = restaurant.info;
  return (
    <div className="flex flex-col items-center rounded-xl gap-2 p-[2px] w-60 h-96">
      <img
        className="w-full h-52 rounded-full"
        src={IMG_URL + cloudinaryImageId}
      ></img>
      <div className="text-center">
        <Link to={"/restaurant/" + id} key={id}>
          <p className="text-2xl text-blue-400">{name}</p>
        </Link>
        <p>{cuisines.join(" , ")}</p>
        <div className="flex items-center justify-center gap-1">
          <span className="flex items-center">
            <FaStar color="#f4511f" size={18} />
            {avgRating}
          </span>
          <span>| {sla?.slaString}</span>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
