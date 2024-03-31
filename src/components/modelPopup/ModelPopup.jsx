import { useState } from "react";
import Popup from "./Popup";

export default function ModelPopup() {
  const [modelPopup, setModelPopup] = useState(false);
  function handleToggleModelPopup() {
    setModelPopup(!modelPopup);
  }
  return (
    <div>
      <button onClick={() => handleToggleModelPopup()}>Open Model Popup</button>
      {modelPopup && <Popup />}
    </div>
  );
}
