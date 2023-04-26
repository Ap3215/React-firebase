import { FC, useEffect } from "react";

import useStorage from "../../../hooks/usestorage";

import classes from "./progress-bar.module.css";
import { motion } from "framer-motion";

type ProgressBarProps = {
  file: any;
  setFile?: any;
};

const ProgressBar: FC<ProgressBarProps> = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url]);

  return (
    <motion.div
      className={classes["progess-bar"]}
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
