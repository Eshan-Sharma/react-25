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
    <div className="flex flex-col items-center">
      <h1>QR code generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="enter value"
        ></input>
        {input && input.trim !== "" ? (
          <button
            type="button"
            onClick={() => {
              handleQrCodeGenerate;
            }}
            className="ml-2 pl-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Generate
          </button>
        ) : (
          <button
            type="button"
            disabled={true}
            className="ml-2 pl-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Generate
          </button>
        )}
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} className="bg-white mb-10" />
      </div>
    </div>
  );
}
