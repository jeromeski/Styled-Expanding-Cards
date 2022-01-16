/*eslint-disable */

import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const [value, setValue] = useState(true);

  const ref = useRef(null);

  const handleMouseOver = () => {
    setValue(true);
  };

  const handleMouseLeave = () => {
    setValue(false);
  };

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref.current]);

  return [ref, value];
};
