import { useEffect, useState } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("📦 List re-rendered due to getItems change");
  }, [getItems]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>Item: {item}</li>
      ))}
    </ul>
  );
}

export default List;
