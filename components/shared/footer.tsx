"use client";
import { sidebarLinks } from "@/constants";
import { SidebarTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <section className="bottom-footer">
      <div className="bottombar_container">
        {sidebarLinks.map((link: SidebarTypes) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;
          return (
            <Link
              href={link.route}
              key={link.route}
              className={`bottombar_link items-center ${isActive && "dark:bg-blue bg-gray-400"}`}
            >
              {/* <Image
                alt=""
                src={link.imgURL}
                className="text-blue"
                height={24}
                width={24}
              /> */}
              <link.Icon/>
              <div className={`max-sm:hidden text-subtle-medium dark:text-light-1 text-dark-1`}>
                {link.label.split(/\s+./)[0]}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Footer;
