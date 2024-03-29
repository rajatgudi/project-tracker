"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="top-header">
      <Link href={"/"} className="flex items-center gap-4">
        <Image
          className="hover:scale-105 duration-150 "
          alt=""
          src={"/logo2.png"}
          height={80}
          width={80}
        />
      </Link>
      <div className="flex items-center gap-3">
        <Button className="bg-light-4 p-2 rounded-full">
          <div className="block text-light-1">
            {theme !== "light" ? (
              <SunIcon
                onClick={() => {
                  setTheme("light");
                }}
                className="h-6 w-6 text-blue"
              />
            ) : (
              <MoonIcon
                onClick={() => {
                  setTheme("dark");
                }}
                className="h-6 w-6 text-gray-300"
              />
            )}

            {/**/}
          </div>
        </Button>
        <div className="block ">
          <Avatar className="hover:scale-105 duration-150 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Header;
