import "./style.css";
import { useState } from "react";

function RandomColor() {
  const [color, setColor] = useState();
  const [colorName, setcolorname] = useState("hex");

  function colorLength(length) {
    return Math.floor(Math.random() * length);
  }

  function HEXColor() {
    const Randomcolor = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      // console.log(
      //   Randomcolor[colorLength(Randomcolor.length)],
      //   Randomcolor.length,
      //   colorLength(Randomcolor.length)
      // );
      hexColor += Randomcolor[colorLength(Randomcolor.length)];
    }
    setColor(hexColor);
  }

  console.log(colorLength());

  function RGBColor() {
    const rgbname = "rgb";
    const R = colorLength(255);
    const G = colorLength(255);
    const B = colorLength(255);

    const RGBcolor = `${rgbname}(${R},${G},${B})`;
    setColor(RGBcolor);
  }

  return (
    <>
      <div className="Random" style={{ backgroundColor: color }}>
        <button
          className="Button"
          onClick={() => {
            HEXColor();
            setcolorname("hex");
          }}
        >
          Hex Color
        </button>

        <button
          className="Button"
          onClick={() => {
            RGBColor();
            setcolorname("rgb");
          }}
        >
          RGB Color
        </button>

        <div>
          {colorName === "hex" ? (
            <p style={{ color: "white" }}>${color} - HEX Color</p>
          ) : (
            <p style={{ color: "white" }}>${color} - RGB Color</p>
          )}
        </div>
      </div>
    </>
  );
}

export default RandomColor;
