import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const CustomNumberInput = styled(TextField)`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default function NumericoInput({ value, onChange, error }) {
  const handleKeyDown = (event) => {
    const { key, ctrlKey, metaKey } = event;
    if (ctrlKey || metaKey) {
      return;
    }

    if (
      !/^[0-9]*$/.test(key) &&
      key !== "Backspace" &&
      key !== "Tab" &&
      key !== "ArrowLeft" &&
      key !== "ArrowRight" &&
      key !== "ArrowUp" &&
      key !== "ArrowDown"
    ) {
      event.preventDefault();
    }
  };

  const handlePaste = (event) => {
    const paste = (event.clipboardData || window.clipboardData).getData("text");
    if (!/^[0-9]*$/.test(paste)) {
      event.preventDefault();
    }
  };
  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue) && newValue.length <= 8) {
      onChange(event);
    }
  };

  return (
    <CustomNumberInput
      error={error}
      helperText={error ? "El DNI debe tener 8 dígitos." : " "}
      label="DNI"
      required
      autoFocus
      variant="outlined"
      type="number"
      id="outlined-controlled"
      placeholder="12345678"
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      onChange={handleChange}
      value={value}
      inputProps={{
        maxLength: 8,
      }}
    />
  );
}
