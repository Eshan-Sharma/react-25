import { useState } from "react";
import data from "./data.json";
import "./style.css";

export default function Accordion() {
  function handleSingleSelection(getCurrentId) {
    setSelected(selected === getCurrentId ? null : getCurrentId);
    console.log(getCurrentId);
  }
  const [selected, setSelected] = useState(null);
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                .<h3>{dataItem.question}</h3>
                <span>+</span>
                {selected === dataItem.id ? (
                  <div className="description">
                    <h5>{dataItem.answer}</h5>
                  </div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No data!</div>
        )}
      </div>
    </div>
  );
}
