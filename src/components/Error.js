import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h3>Oops!!!</h3>
      <h4>Something Went Wrong!!!</h4>
      <p>{err.status + " : " + err.statusText}</p>
    </>
  );
};
export default Error;
