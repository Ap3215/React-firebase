import { FC } from "react";

import useFirestore from "../../../hooks/usefirestore";
import classes from "./gallery.module.css";
import { motion } from "framer-motion";

type Gallery = {
  setSelectPhoto: any;
};

const Gallery: FC<Gallery> = ({ setSelectPhoto }) => {
  const { image } = useFirestore("images");
  // console.log(image);

  return (
    <div className={classes["gallery"]}>
      {image &&
        image.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className={classes["gallery--wrap"]}
            key={doc.id}
            onClick={() => setSelectPhoto(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="Upload Pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default Gallery;
