import React from "react";
import { CirclePicker } from "react-color";

const ColorPicker = ({
  colors,
  selectedColor,
  onColorChange,
  setIsOpen,
  isOpen,
  refPicker,
  icon,
  placeholder,
}) => {
  return (
    <div className="flex flex-col items-start justify-center relative mb-4">
      <div className="flex items-center justify-center">
        <input
          style={{ background: selectedColor }}
          className="w-[300px] h-16 outline-none font-medium border-2 border-transparent rounded-xl transition duration-300 px-4"
          type="text"
          disabled
          placeholder={placeholder}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: selectedColor }}
          className="rounded-full flex items-center justify-center p-1 ml-4 outline-none transition duration-500 active:scale-110"
        >
          {icon}
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute top-[4.5em] left-0 z-50 bg-gray-100 p-3 rounded-xl"
          ref={refPicker}
        >
          <CirclePicker
            className="border-none outline-none"
            colors={colors}
            triangle="hide"
            onChange={onColorChange}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
