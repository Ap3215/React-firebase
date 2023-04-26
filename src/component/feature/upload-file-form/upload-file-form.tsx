import { FC, ChangeEvent, useState } from "react";
import ProgressBar from "../progress-bar/progress-bar";

import classes from "./upload-file.form.module.css";

const UploadFileForm: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const fileType = ["image/png", "image/jpeg", "image/svg+xml"];

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const selectfile = e.target.files;
    console.log("running");

    if (selectfile && fileType.includes(selectfile[0].type)) {
      setFile(selectfile[0]);
      setError("");
    } else {
      setFile(null);
      setError("Please Select an valid Image file type (png, jpeg, svg )");
    }
    console.log(selectfile);
  };

  return (
    <form className={classes["form"]}>
      <label className={classes["form--label"]}>
        <input
          className={classes["input"]}
          type="file"
          placeholder="choose file"
          onChange={onChangeHandler}
        />
        <span>+</span>
      </label>

      <div className="form--message">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadFileForm;
