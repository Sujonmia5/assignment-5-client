import { TbDashboardFilled } from "react-icons/tb";
import { THeaderProps } from "../types/header";
import { TAchievement } from "../types/utils";
import { MenuProps } from "antd";
import { FiLogOut } from "react-icons/fi";

// About header properties
export const aboutData: THeaderProps = {
  title: "About",
  title1: "Us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
};

// Contact header properties
export const contactData: THeaderProps = {
  title: "Contact",
  title1: "Us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
};

// Space header properties
export const spaceData: THeaderProps = {
  title: "Our",
  title1: "Spaces",
  description: "Choose from our variety of spaces to suit your needs",
};

// Achievement data properties
export const achievementData: TAchievement[] = [
  {
    title: "Creative Member",
    total: 127,
  },
  {
    title: "Collaboration Projects",
    total: 500,
  },
  {
    title: "Networking Events",
    total: 500,
  },
];

// Dropdown items based on user role
export const dropdownWithRole = (role: string): MenuProps["items"] => {
  switch (role) {
    case "admin":
      return [
        {
          label: "Deshboard",
          key: "1",
          icon: <TbDashboardFilled />,
          className: "font-exo text-xl",
        },

        {
          label: "Log out",
          key: "2",
          icon: <FiLogOut />,
        },
      ];

    case "user":
      return [
        {
          label: "My Booking",
          key: "1",
          icon: <TbDashboardFilled />,
        },
        {
          label: "Log out",
          key: "2",
          icon: <TbDashboardFilled />,
        },
      ];
    default:
      return;
  }
};

// admin dashboard sidebar
