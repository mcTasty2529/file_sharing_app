"use client";

import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { StorageReference } from "firebase/storage";

const Files = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] mx-6 my-4 gap-3 overflow-y-scroll">
      {files.map((file: { name: string }, index: number) => (
        <div
          key={index}
          className="bg-blue-800 rounded text-zinc-200 p-4 flex justify-between items-center w-[100%] h-[100px]"
        >
          <div className="">{file.name}</div>
          <div className="">
            <button
              onClick={() => handleDownload(file)}
              className=" p-2 border-2 border-zinc-200 rounded text-zinc-200 hover:bg-zinc-200 hover:text-blue-900 duration-300"
            >
              Download
            </button>
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

export default Files;
