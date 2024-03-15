// import { useState } from "react";
import data from "./data.json";

export default function Accordion() {
  // const [selected, setSelected] = useState(null);
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? "aa" : <div>No data!</div>}
      </div>
    </div>
  );
}
