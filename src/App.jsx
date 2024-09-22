import { useState } from "react";
import bg from "./assets/bgphotopostermaker.png";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="main">
      <div className="header">
        <h1>Upload Your Image</h1>
        <div className="imageUploadContainer">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      </div>
      <div className="posterContainer">
        <div className="imagecont">
        {image && <img src={image} alt="Uploaded" className="imageUploaded" />}
        </div>
        <img src={bg} alt="Poster background" className="poster" />
      </div>
    </div>
  );
}

export default App;
