export const filterData = (searchRestaurant, restaurants) => {
  if (searchRestaurant == "") return restaurants;
  const filteredRestaurant = restaurants.filter((rest) =>
    rest?.info?.name?.toLowerCase().includes(searchRestaurant.toLowerCase())
  );
  return filteredRestaurant;
};
