import React from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { StorageReference } from "firebase/storage";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const page = () => {
  return (
    <section className="flex items-center justify-center bg-zinc-100 border-2 border-blue-500 shadow-xl shadow-zinc-400 m-10 p-6 rounded-xl w-[70dvw] h-[90dvh] flex-shrink">
      Hello
    </section>
  );
};

export default page;
