"use client";
import React, { useState } from "react";

const NewFile = () => {
  const [file, setFile] = useState([]);
  const [fileData, setFileData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="flex items-center justify-center bg-zinc-100 border-2 border-blue-500 shadow-xl shadow-zinc-400 m-10 p-6 rounded-xl w-[70dvw] h-[90dvh] flex-shrink">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[90%] md:w-[50%]"
      >
        <div>File Preview</div>
        <input
          className=" border-2 border-zinc-500 rounded-lg p-2 "
          type="file"
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
        />
        <input
          className=" border-2 border-zinc-500 rounded-lg p-2 "
          type="text"
          value={fileData}
          placeholder="Details"
          onChange={(e) => setFileData(e.target.value)}
        />
        <button className="border-2 border-blue-500 rounded-lg p-2 text-blue-500 ">
          Add File
        </button>
      </form>
    </section>
  );
};

export default NewFile;
