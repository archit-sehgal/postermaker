import { useState } from "react";
import bg from "./assets/bgphotopostermaker.png";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const HandleClick=()=>{
    document.querySelector(".header").style.display="none"
    window.print();
  }

  return (
    <div className="main">
      <div className="header">
        <h1>Personalized Poster</h1>
        <div className="imageUploadContainer">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button onClick={()=>{
            HandleClick()
          }}>Download</button>
        </div>
      </div>
      <div className="posterContainer">
        <div
          className="imagecont"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat:"no-repeat",
            backgroundPosition: "center",
            padding:"10px"
          }}
        ></div>
        <img src={bg} alt="Poster background" className="poster" />
      </div>
    </div>
  );
}

export default App;
