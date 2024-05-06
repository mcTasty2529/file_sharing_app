"use client";

import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

const YourComponent = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const filesWithUrls = await fetchFilesFromStorage();
      setFiles(filesWithUrls);
    };

    fetchFiles();
  }, []);

  const handleDownload = async (file) => {
    const downloadURL = await getDownloadURL(file.ref);
    const link = document.createElement("a");
    link.href = downloadURL;
    link.download = file.name;
    link.target = "_blank";
    link.click();
  };

  return (
    <div className="flex m-4 p-4 gap-6 flex-wrap ">
      {files.map((file, index) => (
        <div
          className="bg-zinc-200 border-2 border-blue-400 w-[200px] h-[200px] flex flex-col items-center  rounded-lg shadow-xl shadow-zinc-300 text-blue-500 p-4 justify-between"
          key={index}
        >
          {file.name}
          <button
            onClick={() => handleDownload(file)}
            className="border-2 border-blue-500 rounded-lg p-2 text-blue-500 "
          >
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

const fetchFilesFromStorage = async () => {
  const storageRef = ref(storage, "/files"); // Replace '/' with the path to your desired folder
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
