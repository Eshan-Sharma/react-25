import { useState } from "react";
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  return (
    <div
      className="flex justify-center space-x-4"
      style={{ backgroundColor: `${color}` }}
    >
      <button className="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        HEX color
      </button>
      <button className="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        RGB Color
      </button>
      <button className="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Generate Random Color
      </button>
    </div>
  );
}
