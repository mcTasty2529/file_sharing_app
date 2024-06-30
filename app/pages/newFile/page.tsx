"use client";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const NewFile = () => {
  const [file, setFile] = useState<File | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (file == null) {
      alert("Enter a file..");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds the maximum limit of 10MB.");
      return;
    }

    setIsLoading(true);

    const fileRef = ref(storage, `files/${file.name}`);

    uploadBytes(fileRef, file)
      .then(() => {
        setIsLoading(false);

        alert("File Uploaded");
      })
      .catch((error) => {
        console.error("Error uploading file:", error);

        setIsLoading(false);
      });
  };

  return (
    <section className="w-[100%] h-[100%] p-6 flex justify-center">
      {isLoading ? (
        <div>Uploading....</div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border shadow-xl h-[200px] w-[300px] min-w-[200px] p-4 rounded gap-4 justify-center items-center"
        >
          <input
            className="w-[100%] border-2 p-1 rounded"
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
          <button className="bg-blue-800 p-2 w-[100%] rounded text-zinc-200 hover:bg-zinc-200 hover:text-blue-900 duration-300">
            Add File
          </button>
        </form>
      )}
    </section>
  );
};

export default NewFile;
