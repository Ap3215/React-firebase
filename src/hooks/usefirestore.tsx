import { useState, useEffect } from "react";
import { projectFirestore } from "../firbase/firebase-config";
import { collection, query, onSnapshot } from "firebase/firestore";

export interface IImage {
  id: string;
  url: any;
}
const useFirestore = (data: any) => {
  const [image, setImage] = useState<IImage[]>([]);

  useEffect(() => {
    const q = query(collection(projectFirestore, data));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const photos: any = [];
      querySnapshot.forEach((doc) => {
        photos.push({ ...doc.data(), id: doc.id });
      });
      console.log(photos);
      setImage(photos);
    });

    return () => unsubscribe();
  }, [data]);

  return { image };
};

export default useFirestore;
