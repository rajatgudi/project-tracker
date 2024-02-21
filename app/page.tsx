"use client";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, } = useTheme();
  return (
    <>
      <div>
        <p className="dark:text-blue text-gray-900 ">
          {" "}
          The current theme is: {theme}
        </p>
      </div>
    </>
  );
}
