import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const validate = (validationCallback: (val: string) => string | null) => {
    const validationResult = validationCallback(value);

    if (validationResult) {
      setError(validationResult);
      return false;
    }

    setError("");
    return true;
  };

  return {
    value,
    setValue,
    error,
    setError,
    validate,
    // Binder object to spread onto the actual <input>
    bind: {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setValue(e.target.value),
    },
  };
}
