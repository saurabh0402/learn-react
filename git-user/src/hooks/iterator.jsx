import React, { useState, useCallback } from "react";

function useIterator({ data }) {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    function () {
      const newIndex = index + 1;
      setIndex(newIndex === data.length ? 0 : newIndex);
    },
    [index, data]
  );

  const prev = useCallback(
    function prev() {
      const newIndex = index - 1;
      setIndex(newIndex < 0 ? data.length - 1 : newIndex);
    },
    [index, data]
  );

  if (!data) {
    return [null, null, null];
  }

  return [data[index], next, prev];
}

export default useIterator;
