import { useState } from "react";
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  function randomColorUtil(length) {
    let value = Math.floor(Math.random() * length);
    if (value > 9) {
      switch (value) {
        case 10:
          return "A";
        case 11:
          return "B";
        case 12:
          return "C";
        case 13:
          return "D";
        case 14:
          return "E";
        case 15:
          return "F";
        default:
          break;
      }
    } else {
      return value;
    }
  }
  function generateRandomHex() {
    setTypeOfColor("hex");
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    let hexColor = "";
    for (let i = 0; i < 6; i++) {
      hexColor += randomColorUtil(hex.length);
    }
    setColor("#" + hexColor);
  }

  function generateRandomRGB() {
    setTypeOfColor("rgb");
    setColor(
      `rgb(${Math.floor(Math.random() * 255)},
           ${Math.floor(Math.random() * 255)}, 
           ${Math.floor(Math.random() * 255)})`
    );
  }
  return (
    <div
      className="flex justify-center space-x-4"
      style={{ backgroundColor: `${color}` }}
    >
      <button
        onClick={() => generateRandomHex()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        HEX color
      </button>
      <button
        onClick={() => generateRandomRGB()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? () => generateRandomHex()
            : () => generateRandomRGB()
        }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Generate Random Color
      </button>
    </div>
  );
}
