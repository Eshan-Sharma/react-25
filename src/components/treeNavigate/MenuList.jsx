/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((item, index) => <MenuItem key={index} item={item} />)
        : null}
    </ul>
  );
}
