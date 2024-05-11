"use client";

import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { StorageReference } from "firebase/storage";
import { MdOutlineInsertComment } from "react-icons/md";
import Link from "next/link";

const YourComponent = () => {
  const [files, setFiles] = useState<{ name: string; ref: StorageReference }[]>(
    []
  );

  useEffect(() => {
    const fetchFiles = async () => {
      const filesWithUrls = await fetchFilesFromStorage();
      setFiles(filesWithUrls);
    };

    fetchFiles();
  }, []);

  const handleDownload = async (file: any) => {
    const downloadURL = await getDownloadURL(file.ref);
    const link = document.createElement("a");
    link.href = downloadURL;
    link.download = file.name;
    link.target = "_blank";
    link.click();
  };

  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-4 lg:grid-cols-4  m-2 p-2 gap-4 ">
      {files.map((file: { name: string }, index: number) => (
        <div
          key={index}
          className="bg-blue-800 p-3 rounded-lg  w-52 h-[200px] items-center justify-between flex flex-col flex-shrink-0 text-zinc-200"
        >
          <div className="text-wrap truncate overflow-ellipsis break-all">
            {file.name}
          </div>
          <div className="flex items-center justify-center gap-10">
            <button
              onClick={() => handleDownload(file)}
              className="border-2 border-zinc-200 rounded-lg p-2 text-zinc-200 "
            >
              Download
            </button>
            <Link href={`/pages/viewfile/${file.name}`}>
              <div className="text-white">
                <MdOutlineInsertComment size={30} />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const fetchFilesFromStorage = async () => {
  const storageRef = ref(storage, "/files");
  const result = await listAll(storageRef);
  const filesWithUrls = await Promise.all(
    result.items.map(async (itemRef) => ({
      name: itemRef.name,
      ref: itemRef,
    }))
  );
  return filesWithUrls;
};

export default YourComponent;
