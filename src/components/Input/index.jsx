import React from "react";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <div className="w-full flex items-center justify-center mr-12 relative mb-4">
      <input
        className="w-[300px] bg-gray-100 h-16 font-medium outline-none border-2 border-transparent rounded-xl transition duration-300 px-4 focus:border-gray-200"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
