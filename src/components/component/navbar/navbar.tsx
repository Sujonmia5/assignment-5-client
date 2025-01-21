import { NavLink } from "react-router-dom";
import brandLogo from "../../../assets/image/Coworking-Space.png";
import { menuItems } from "../../../utils/navbarItems";
import { Button, Tooltip } from "antd";
import { useAppSelector } from "../../../redux/hooks";
import { FiLogOut } from "react-icons/fi";
const Navbar = () => {
  const user = useAppSelector((state) => state.user.user);
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
            {user.role ? (
              <>
                {user.role === "admin" ? (
                  <>
                    <li>
                      <NavLink
                        className="text-lg capitalize font-faSolid font-medium text-white"
                        to="/deshboard"
                      >
                        Deshboard
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink
                        className="text-lg capitalize font-faSolid font-medium text-white"
                        to="/my-booking"
                      >
                        My booking
                      </NavLink>
                    </li>
                  </>
                )}
                <li>
                  <Tooltip placement="top" title={"Log Out"} color="red">
                    <Button
                      type="primary"
                      size="middle"
                      icon={<FiLogOut className="size-6" />}
                      classNames={{
                        icon: "flex items-center justify-center",
                      }}
                      color="primary"
                      className="text-white flex items-center justify-center gap-1 font-exo text-lg font-semibold hover:text-primary-light"
                    ></Button>
                  </Tooltip>
                </li>
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
