import { SidebarTypes } from "@/types";

export const sidebarLinks = <SidebarTypes[]>[
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/interactions",
    label: "Interaction",
  },
  //   {
  //     imgURL: "/assets/search.svg",
  //     route: "/search",
  //     label: "Search",
  //   },
  {
    imgURL: "/assets/create.svg",
    route: "/new-project",
    label: "Create Project",
  },

  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/settings",
    label: "Settings",
  },
];
