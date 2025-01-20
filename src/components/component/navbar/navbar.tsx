import { NavLink } from "react-router-dom";
import brandLogo from "../../../assets/image/Coworking-Space.png";
import { menuItems } from "../../../utils/navbarItems";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="relative z-50 pt-10 max-w-screen-2xl mx-auto bg-transparent">
      <nav className="flex items-center justify-between w-full">
        {/* left side brand logo */}
        <div>
          <figure>
            <img className="w-60 object-cover" src={brandLogo} alt="" />
          </figure>
        </div>
        {/* right side menu for desktop */}
        <div className=" bg-[#ffffff1a]   w-fit pl-14 pr-10 py-6 flex items-center rounded-full">
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
            <li>
              <Button icon={<SearchOutlined />} iconPosition={"start"}>
                Search
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
