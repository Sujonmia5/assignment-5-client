import { NavLink } from "react-router-dom";
import { TDashboardSidebar } from "../types/utils";

export const sideNavGanarate = (items: TDashboardSidebar[]) => {
  const navItems = items.map((item, i) => {
    if (item.label && item.children) {
      return {
        key: (i + 1).toString(),
        label: item.label,
        icon: item.icon,
        children: item.children.map((child, j) => {
          return {
            key: `${i + 1}-${j + 1}`,
            label: (
              <NavLink to={`/dashboard/${child.path}`}>{child.label}</NavLink>
            ),
            icon: child.icon,
          };
        }),
      };
    }
    return {
      key: (i + 1).toString(),
      label: <NavLink to={`/dashboard/${item.path}`}>{item.label}</NavLink>,
      icon: item.icon,
    };
  });

  return navItems;
};
