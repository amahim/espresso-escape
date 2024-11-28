import logo from "../src/assets/images/more/logo1.png";
import "../src/Nav.css";
const Nav = () => {
  return (
    <div className="nav-css flex gap-2 items-center text-center justify-center p-4">
      <img src={logo} alt="" className="w-10 h-10 md:w-12 md:h-12" />
      <h1 className="font-rancho text-2xl md:text-4xl text-white">
        Espresso Escape
      </h1>
    </div>
  );
};

export default Nav;
