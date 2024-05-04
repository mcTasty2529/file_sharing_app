import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoFolderOpenOutline, IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  const sideLinks = [
    {
      name: "Home",
      icon: <IoHomeOutline />,
      url: "/",
    },
    {
      name: "Files",
      icon: <IoFolderOpenOutline />,
      url: "/pages/files",
    },
    {
      name: "About",
      icon: <CgProfile />,
      url: "/pages/about",
    },
  ];
  return (
    <nav className="bg-zinc-300 h-[100dvh] w-[20vw] p-3 hidden md:block ">
      <h1 className="text-zinc-800 font-bold text-2xl">FILE SHARE</h1>
      <div className=" flex flex-col mt-6 p-1 gap-4 text-zinc-700">
        {sideLinks.map((link, index) => (
          <Link href={link.url}>
            <div
              key={index}
              className="bg-zinc-100 rounded-md py-3 px-4 flex justify-between items-center gap-2 shadow-lg shadow-zinc-400"
            >
              {link.name}
              {link.icon}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
