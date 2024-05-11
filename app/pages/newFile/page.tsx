"use client";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const db = getFirestore();

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const NewFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileDetail, setFileDetail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (file == null) {
      alert("Enter a file..");
      return;
    }

    if (!fileDetail) {
      alert("Enter file details...");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("File size exceeds the maximum limit of 10MB.");
      return;
    }

    setIsLoading(true);

    const fileRef = ref(storage, `files/${file.name}`);
    const colRef = collection(db, "filedetails");

    addDoc(colRef, {
      details: `${fileDetail}`,
      name: `${file.name}`,
    });

    setFileDetail("");

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
    <section className="flex items-center justify-center bg-zinc-100 border-2 border-blue-500 shadow-xl shadow-zinc-400 m-10 p-6 rounded-xl w-[70dvw] h-[90dvh] flex-shrink">
      {isLoading ? (
        <div>Uploading....</div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[90%] md:w-[50%]"
        >
          <input
            className=" border-2 border-zinc-500 rounded-lg p-2 "
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
          <input
            className=" border-2 border-zinc-500 rounded-lg p-2 "
            type="text"
            value={fileDetail}
            placeholder="Details..."
            onChange={(e) => {
              setFileDetail(e.target.value);
            }}
          />
          <button className="border-2 border-blue-500 rounded-lg p-2 text-blue-500 ">
            Add File
          </button>
        </form>
      )}
    </section>
  );
};

export default NewFile;
