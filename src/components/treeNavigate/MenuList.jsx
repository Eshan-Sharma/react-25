/* eslint-disable react/prop-types */
import MenuItem from "./MenuItem";

export default function MenuList({ list = [] }) {
  return (
    <ul className="list-none mt-0 mb-0">
      {list && list.length
        ? list.map((item, index) => <MenuItem key={index} item={item} />)
        : null}
    </ul>
  );
}
