import Link from "next/link";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";

const AddFile = () => {
  return (
    <>
      <Link href="/pages/newFile">
        <div className="bg-zinc-200 border-2 border-blue-400 w-[150px] h-[150px] flex flex-col items-center justify-center rounded-lg shadow-xl shadow-zinc-300 text-blue-500">
          <CiSquarePlus size={30} />
          <h1>Add new file</h1>
        </div>
      </Link>
    </>
  );
};

export default AddFile;
