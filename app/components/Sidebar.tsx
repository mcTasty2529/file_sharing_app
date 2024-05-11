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
    <nav className="bg-blue-900 h-dvh w-[20vw] p-3 flex flex-col flex-shrink-0">
      <h1 className="text-zinc-200 font-bold text-2xl text-center">
        FILE SHARE
      </h1>
      <div className=" flex flex-col mt-10 p-1 gap-4 text-zinc-700">
        {sideLinks.map((link, index) => (
          <Link href={link.url}>
            <div
              key={index}
              className="bg-zinc-100 rounded-md py-3 px-4 flex justify-between items-center gap-2 shadow-lg "
            >
              <div className="hidden md:block">{link.name}</div>
              <div>{link.icon}</div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
