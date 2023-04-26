import { FC } from "react";

import classes from "./heading.module.css";

const Heading: FC = () => {
  return (
    <div className={classes["heading"]}>
      <h1 className={classes["heading--title"]}>PerfectPicture</h1>
      <h2 className={classes["heading--head"]}>Your picture</h2>
      <p className={classes["heading--desc"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Heading;
