import { ReactNode } from "react";

export type TNavbarItems = {
  name: string;
  element: ReactNode;
  children?: TNavbarItems[];
};
