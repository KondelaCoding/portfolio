import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the homepage of my portfolio website.</p>
      <ul>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
      </ul>
      <button className="btn">Contact</button>

      <Outlet />
    </>
  );
};

export default Home;
