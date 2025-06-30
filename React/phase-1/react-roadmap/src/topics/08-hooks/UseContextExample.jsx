import { useEffect, useState } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("📦 List re-rendered due to getItems change");
  }, [getItems]);

  return (
<ul className="mt-4 space-y-2">
  {items.map((item) => (
    <li
      key={item}
      className="bg-blue-100 text-blue-900 px-4 py-2 rounded shadow-sm"
    >
      Item: {item}
    </li>
  ))}
</ul>

  );
}

export default List;
