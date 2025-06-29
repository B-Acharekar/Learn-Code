import { useEffect, useState } from "react";

function ResizeListener() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>Window Width Listener</h2>
      <p>Width: {width}px</p>
    </div>
  );
}

export default ResizeListener;
