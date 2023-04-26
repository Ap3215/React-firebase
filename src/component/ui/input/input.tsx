import { FC } from "react";

import classes from "./inupt.module.css";

type InputProps = {
  placeholder: string;
  type: "text" | "file";
  onChange: any;
};

const Input: FC<InputProps> = ({ type, onChange, placeholder }) => {
  return (
    <input
      className={classes["Input"]}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
