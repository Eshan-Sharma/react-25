/* eslint-disable react/prop-types */
export default function Popup({ id, header, body, footer, onClose }) {
  return (
    <div
      id={id || "Model"}
      className="model fixed top-0 left-0 w-full h-full bg-green-300 flex justify-center items-center"
    >
      <div className="relative bg-white border-2 border-red-500 w-5/6 animate-modal">
        <div className="header">
          <span
            onClick={onClose}
            className="close-model-icon text-2xl font-bold cursor-pointer"
          >
            &times;
          </span>
          <header className="bg-green-500 text-white p-4">
            {header ? header : "Header"}
          </header>
        </div>
        <div className="body p-4 h-80 overflow-auto">
          {body ? body : <div>Body</div>}
        </div>
        <div className="footer bg-green-500 text-white p-4">
          {footer ? footer : <h2>Footer</h2>}
        </div>
      </div>
    </div>
  );
}
