import { NavLink, useNavigate } from "react-router-dom";
import brandLogo from "../../../assets/image/Coworking-Space.png";
import { menuItems } from "../../../utils/navbarItems";
import { Button, Dropdown } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import { FaUserAlt } from "react-icons/fa";
import { dropdownWithRole } from "../../../utils/utilsData";
import { logout } from "../../../redux/feature/userSlice";

const Navbar = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispacth = useAppDispatch();
  const navigate = useNavigate();

  const dropdownClick = ({ key }: { key: string }) => {
    if (key === "1" && user?.role === "admin") {
      navigate("/dashboard");
    }
    if (key === "1" && user?.role === "user") {
      navigate("/my-booking");
    }
    if (key === "2") {
      localStorage.removeItem("token");
      dispacth(logout());
      navigate("/");
    }
  };

  const menuProps = {
    items: dropdownWithRole(user?.role),
    onClick: dropdownClick,
  };
  return (
    <div className="relative z-50 pt-10 px-5 max-w-screen-2xl mx-auto bg-transparent">
      <nav className="flex items-center justify-between w-full">
        {/* left side brand logo */}
        <div>
          <figure>
            <img className="w-60 object-cover" src={brandLogo} alt="" />
          </figure>
        </div>
        {/* right side menu for desktop */}
        <div className="hidden lg:flex bg-[#ffffff1a] w-fit pl-14 pr-10 py-6 items-center rounded-full">
          <ul className="flex gap-x-14">
            {
              // menu items
              menuItems.map(({ name }, i) => (
                <li key={i}>
                  <NavLink
                    className="text-lg capitalize font-faSolid font-medium text-white"
                    to={name}
                  >
                    {name}
                  </NavLink>
                </li>
              ))
            }

            {user?.role ? (
              <>
                <Dropdown
                  menu={menuProps}
                  placement="bottomCenter"
                  className="cursor-pointer"
                  overlayStyle={{
                    backgroundColor: "#ffffff1a",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                    padding: "5px 10px",
                    zIndex: "100",
                  }}
                >
                  <FaUserAlt size={30} className="text-white" />
                </Dropdown>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className="text-lg capitalize font-faSolid font-medium text-white"
                    to="/login"
                  >
                    Log in
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-lg capitalize font-faSolid font-medium text-white"
                    to="/login"
                  >
                    <Button>Sign up</Button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
