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
    <nav className="bg-blue-900 h-[100vh] w-[150px] p-3 flex shrink-0 flex-col">
      <p className=" text-white font-bold text-xl mb-4 text-center">
        FILE SHARE
      </p>
      <hr />
      <div className=" flex flex-col mt-10 p-1 gap-4 text-zinc-700">
        {sideLinks.map((link, index) => (
          <Link href={link.url} key={index}>
            <div className="bg-white rounded px-3 py-2 flex justify-between items-center gap-2 shadow-lg ">
              <div>{link.name}</div>
              <div>{link.icon}</div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
