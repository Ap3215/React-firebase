import { FC, useState } from "react";
import Heading from "./component/feature/heading/heading";
import UploadFileForm from "./component/feature/upload-file-form/upload-file-form";
import Gallery from "./component/feature/gallery/gallery";
import PhotoModal from "./component/feature/modal/photo-modal";

const App: FC = () => {
  const [selectPhoto, setSelectPhoto] = useState(null);
  return (
    <div className="App">
      <Heading />
      <UploadFileForm />
      <Gallery setSelectPhoto={setSelectPhoto} />
      {selectPhoto && (
        <PhotoModal selectPhoto={selectPhoto} setSelectPhoto={setSelectPhoto} />
      )}
    </div>
  );
};

export default App;
