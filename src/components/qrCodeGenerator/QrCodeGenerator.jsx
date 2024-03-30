import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  function handleQrCodeGenerate() {
    console.log(input);
    setQrCode(input);
    setInput("");
  }
  return (
    <div>
      <h1>QR code generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="enter value"
        ></input>
        <button
          disabled={input && input.trim !== "" ? false : true}
          onClick={() => {
            handleQrCodeGenerate;
          }}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} className="bg-white mb-10" />
      </div>
    </div>
  );
}
