import { Link } from "react-router";

const UnAuthorized = () => {
  return (
    <div>
      <h1> Muri Khaa, tui authorized na....</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default UnAuthorized;
