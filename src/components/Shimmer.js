import { v4 } from "uuid";
const Shimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-y-20 gap-x-10">
      {Array(12)
        .fill("")
        .map(() => (
          <div className="flex flex-col items-center gap-3" key={v4()}>
            <span className="w-full h-48 bg-gray-900 rounded-full"></span>
            <div className="w-full h-16 bg-gray-900 rounded-2xl"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
