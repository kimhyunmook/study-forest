import { useState } from "react";

export function useChange(a = "") {
  const [value, setValue] = useState(a);
  function handle(e) {
    e.preventDefault();
    setValue(e.target.value);
  }
  return {
    value,
    set: (v) => setValue(v),
    onChange: handle,
  };
}
