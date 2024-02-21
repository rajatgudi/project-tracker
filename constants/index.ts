import { SidebarTypes } from "@/types";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { FaHome, FaHeart, FaUser, FaCog, FaPlus } from "react-icons/fa";
export const sidebarLinks = <SidebarTypes[]>[
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
    Icon: FaHome,
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/interactions",
    label: "Interaction",
    Icon: FaHeart,
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
    Icon: FaPlus,
  },

  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
    Icon: FaUser,
  },
  {
    imgURL: "/assets/community.svg",
    route: "/settings",
    label: "Settings",
    Icon: FaCog,
  },
];
