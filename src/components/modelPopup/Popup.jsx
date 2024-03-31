export default function Popup({ id, header, body, footer }) {
  return (
    <div id={id || "Model"} className="model">
      <div className="header">
        <span className="close-model-icon">&times;</span>
        <header>{header ? header : "Header"}</header>
      </div>
      <div className="body">{body ? body : <div>Body</div>}</div>
      <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
    </div>
  );
}
