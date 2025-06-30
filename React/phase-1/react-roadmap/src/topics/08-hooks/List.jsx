import { useEffect, useState } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("📦 Updating items...");
    setItems(getItems());
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
