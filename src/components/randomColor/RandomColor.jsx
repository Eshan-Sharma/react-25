import { useState } from "react";
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  function generateRandomHex() {
    setTypeOfColor("hex");
  }
  function generateRandomRGB() {
    setTypeOfColor("rgb");
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
      {console.log(typeOfColor)}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Generate Random Color
      </button>
    </div>
  );
}
