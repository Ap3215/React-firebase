import { useState, useEffect, useRef } from "react";
import { projectStorage, projectFirestore } from "../firbase/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection } from "firebase/firestore";
import { addDoc, Timestamp } from "firebase/firestore";

const useStorage = (file: any) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    console.log("Hello world");
    const storageRef = ref(projectStorage, file.name);
    console.log(storageRef);

    const docRef = collection(projectFirestore, "images");
    console.log(docRef);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (err) => {
        setError(err.message);
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(collection(projectFirestore, "images"), {
            url: downloadURL,
            createdAt: Timestamp.fromDate(new Date()),
          });
          // console.log("getphoto:", downloadURL);
          setUrl(downloadURL);
        });
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
