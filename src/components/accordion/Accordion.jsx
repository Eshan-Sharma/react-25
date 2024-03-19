import { useState } from "react";
import data from "./data.json";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState([]);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSelected(selected === getCurrentId ? null : getCurrentId);
    console.log(getCurrentId);
  }
  function handleMultipleSelection(getCurrentId) {
    let copyMultiSelect = [...multiSelect];
    let getCurrentIndexId = multiSelect.indexOf(getCurrentId);
    if (getCurrentIndexId === -1) {
      copyMultiSelect.push(getCurrentId);
    } else {
      multiSelect.splice(getCurrentIndexId, 1);
    }
    setMultiSelect(copyMultiSelect);
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setEnableMultiSelect(!enableMultiSelect);
        }}
      >
        Enable Multiselect
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                .<h3>{dataItem.question}</h3>
                <span>+</span>
                {enableMultiSelect
                  ? multiSelect.indexOf(dataItem.id) !== -1 && (
                      <div className="description">
                        <h5>{dataItem.answer}</h5>
                      </div>
                    )
                  : selected === dataItem.id && (
                      <div className="description">
                        <h5>{dataItem.answer}</h5>
                      </div>
                    )}
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
