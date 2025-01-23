import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import logo from "../../../assets/image/Coworking-Space.png";
import { dashboardItems } from "../../../utils/utilsData";
import { sideNavGanarate } from "../../../utils/utilsFunction";
import { IoMdLogOut } from "react-icons/io";

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
  padding: "24px 0",
};

const items = sideNavGanarate(dashboardItems);

const Sidebar = () => {
  return (
    <>
      <Sider style={siderStyle}>
        <div className="my-5">
          <div className="logo">
            <img className="w-40 ml-5" src={logo} alt="" />
          </div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["2"]}
          items={items}
        />
        <div className="absolute bottom-0">
          <div className="w-full flex items-center justify-center">
            <Button
              size="middle"
              variant="link"
              type="default"
              color="danger"
              danger
              icon={<IoMdLogOut className="size-5 font-bold" />}
              className="w-full font-exo font-semibold text-xl"
            >
              {" "}
              Log out
            </Button>
          </div>
          <div className="flex justify-end items-center px-10 py-1">
            <div className="text-gray-400 text-xs">
              Outspace Admin <br /> V1.0.0
            </div>
          </div>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
