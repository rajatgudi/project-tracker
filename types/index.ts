import React from "react";

type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;
export type SidebarTypes = {
  imgURL: string;
  route: string;
  label: string;
  Icon: any;
};
