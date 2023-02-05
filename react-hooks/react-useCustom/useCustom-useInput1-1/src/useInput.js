import { useState } from "react";

export function useInput(초기값) {
  const [inputValue, setInputValue] = useState(초기값);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange];
}
