import React from "react";

const SizeSelect = ({ value, onChange }) => {
  return (
    <div className="w-[300px] h-16 flex items-center justify-between bg-gray-100 rounded-xl px-4 ">
      <label htmlFor="sizeSelect" className="font-medium">
        QR Kod Boyutu:
      </label>
      <select
        id="sizeSelect"
        className="p-2 border font-medium border-gray-300 border-none outline-none rounded-md"
        onChange={onChange}
        value={value}
      >
        <option value="200">200</option>
        <option value="400">400</option>
        <option value="600">600</option>
      </select>
    </div>
  );
};

export default SizeSelect;
