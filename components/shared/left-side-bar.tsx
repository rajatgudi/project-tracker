"use client";
import { sidebarLinks } from "@/constants";
import React from "react";
import { SidebarTypes } from "../../types/index";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LeftSideBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link: SidebarTypes) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;
          return (
            <Link
              href={link.route}
              key={link.route}
              className={`leftsidebar_link ${isActive && "bg-blue"}`}
            >
              <Image
                alt=""
                src={link.imgURL}
                className="text-blue"
                height={24}
                width={24}
              />
              <div className={`max-lg:hidden text-light-1`}>{link.label}</div>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-3  justify-center items-center ">
        <Button
          variant={"link"}
          className="flex gap-4"
          onClick={() => {
            alert("Logging out....!");
          }}
        >
          <Image src={"/assets/logout.svg"} height={24} width={24} alt="" />
          <div className={`max-lg:hidden text-light-1`}>Logout</div>
        </Button>{" "}
      </div>
    </section>
  );
};

export default LeftSideBar;
