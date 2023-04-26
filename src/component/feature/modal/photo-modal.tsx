import { FC } from "react";
import { motion } from "framer-motion";

import classes from "./photo-modal.module.css";

type PhotoModalProps = {
  selectPhoto: any;
  setSelectPhoto: any;
};

const PhotoModal: FC<PhotoModalProps> = ({ selectPhoto, setSelectPhoto }) => {
  const onclickHandler = () => {
    setSelectPhoto(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={classes["photo-modal"]}
      onClick={onclickHandler}
    >
      <motion.img
        src={selectPhoto}
        alt="enlarge pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default PhotoModal;
