import { useState } from "react";
import bg from "./assets/bgphotopostermaker.png";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleScreenshot = () => {
    const posterElement = document.querySelector(".posterContainer");

    html2canvas(posterElement).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "poster_screenshot.png";
      link.click();
    });
  };

  return (
    <div className="main">
      <div className="header">
        <h1 style={{"marginBottom":"-30px","letterSpacing":"-.04rem","wordSpacing":".5rem"}}>USMAN MAJID</h1>
        <h2 style={{color:"red",marginBottom:"5px"}}>Personalized Poster</h2>
        <div className="imageUploadContainer">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <button onClick={handleScreenshot}>Download</button>
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
