import { v4 } from "uuid";
const MenuShimmer = () => {
  return (
    <div className="grid grid-cols-3 gap-y-20 gap-x-10">
      {Array(12)
        .fill("")
        .map(() => (
          <div className="flex flex-col items-center gap-3" key={v4()}>
            <span className="w-3/4 h-52 bg-gray-900 rounded-3xl"></span>
            <div className="w-3/4 h-16 bg-gray-900 rounded-2xl"></div>
          </div>
        ))}
    </div>
  );
};
export default MenuShimmer;
