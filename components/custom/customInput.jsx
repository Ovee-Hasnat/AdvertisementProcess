import React from "react";

const CustomInput = ({width, placeholder, type}) => {
  return (
    <input
      type={type}
      class={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 w-${width}`}
      placeholder={placeholder}
      required
    />
  );
};

export default CustomInput;
