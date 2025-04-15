import { useContext } from "react";
import image from "../assets/Icon.png";
import "./Header.css";
import { Outlet, useNavigate } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";
const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className={darkMode ? "Header-dark " : "Header"}>
        <div className="flex items-center ml-5">
          <img onClick={goHome} width={90} src={image} alt="" />
          <p style={{ cursor: "default" }}>University Three Duckling</p>
        </div>
        <div>
          <label className="switch-theme mr-5">
            <input title="SearchInput" type="checkbox" onChange={toggleDarkMode} defaultChecked={true}/>
            <span className="slider-theme"></span>
          </label>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
