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
              className={`bottombar_link ${isActive && "bg-blue"}`}
            >
              <Image
                alt=""
                src={link.imgURL}
                className="text-blue"
                height={24}
                width={24}
              />
              <div className={`max-sm:hidden text-subtle-medium text-light-1`}>
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
