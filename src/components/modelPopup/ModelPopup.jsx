import { useState } from "react";
import Popup from "./Popup";

export default function ModelPopup() {
  const [modelPopup, setModelPopup] = useState(false);
  function handleToggleModelPopup() {
    setModelPopup(!modelPopup);
  }
  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleToggleModelPopup()}
      >
        Open Model Popup
      </button>
      <div>{modelPopup && <Popup body={<div>Customized content</div>} />}</div>
      {console.log(modelPopup)}
    </div>
  );
}
