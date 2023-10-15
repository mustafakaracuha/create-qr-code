import React, { useState, useEffect } from "react";
import { TwitterPicker } from "react-color";

import QrCode from "./components/QrCode/QrCode";


function App() {
  const [value, setValue] = useState("");
  const [back, setBack] = useState("#F3F4F6");
  const [isBack, setIsBack] = useState(false);
  const [fore, setFore] = useState("#000000");
  const [isFore, setIsFore] = useState(false);
  const [size, setSize] = useState(250);
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    setQrValue(value);
  }, [value, back, fore, size]);


  const darkColors = [
    "#0F0F0F",
    "#940B92",
    "#4477CE",
    "#F39F5A",
    "#183D3D",
    "#A76F6F",
    "#CD1818",
    "#0E8388",
    "#008170",
    "#FFF",
  ];

  const lightColors = [
    "#FFF8C9",
    "#DFCCFB",
    "#A8DF8E",
    "#FFBFBF",
    "#ADC4CE",
    "#9ED2BE",
    "#D2E0FB",
    "#F1F0E8",
    "#FAF0D7",
    "#FFF",
  ];


  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
  };


  return (
    <div
      className="max-w-md flex flex-col items-center justify-center min-h-screen mx-auto"
    >
      <h1 className="flex items-center justify-center text-4xl mb-7 text-start mr-9 font-semibold text-violet-500">
        Qr kodunu yarat
      </h1>

      <div className="w-full flex items-center justify-center mr-9 relative mb-4">
        <input
          className="w-[300px] bg-gray-100 h-16 outline-none border-2 border-transparent rounded-xl transition duration-300 px-4 focus:border-gray-200"
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Qr kod içeriği"
        />
      </div>

      <div className="flex flex-col items-start justify-center relative mb-4">
        <div className="flex items-center justify-center">
          <input
            style={{ background: back }}
            className="w-[300px] h-16 outline-none border-2 border-transparent rounded-xl transition duration-300 px-4 placeholder:text-black"
            type="text"
            disabled
            placeholder="Arka plan rengi"
          />
          <button
            onClick={() => setIsBack(!isBack)}
            style={{background : back}}
            className="rounded-full w-5 p-1 h-5 ml-4 outline-none transition duration-500 active:scale-110"
          ></button>
        </div>
        {isBack && (
          <div className="absolute top-[4.5em] left-0 z-50">
            <TwitterPicker
              colors={lightColors}
              triangle="hide"
              onChange={(color) => setBack(color.hex)}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-center relative mb-4">
        <div className="flex items-center justify-center">
          <input
            style={{ background: fore }}
            className="w-[300px] h-16 outline-none border-2 border-transparent rounded-xl transition duration-300 px-4 placeholder:text-white"
            type="text"
            disabled
            placeholder="Ön plan rengi"
          />
          <button
            onClick={() => setIsFore(!isFore)}
            style={{background : fore}}
            className="rounded-full w-5 h-5 ml-4 outline-none transition duration-500 active:scale-110"
          ></button>
        </div>
        {isFore && (
          <div className="absolute top-[4.5em] left-0 z-50">
            <TwitterPicker
              colors={darkColors}
              triangle="hide"
              onChange={(color) => setFore(color.hex)}
            />
          </div>
        )}
      </div>

      <div className="w-[300px] h-16 flex items-center justify-between bg-gray-100 rounded-xl px-4 mr-9">
        <label htmlFor="sizeSelect">QR Kod Boyutu:</label>
        <select
          id="sizeSelect"
          className="p-2 border border-gray-300 border-none outline-none rounded-md"
          onChange={handleSizeChange}
          value={size}
        >
          <option value="200">200</option>
          <option value="400">400</option>
          <option value="600">600</option>
        </select>
      </div>
      <QrCode qrValue={qrValue} back={back} fore={fore} size={size}/>
    </div>
  );
}

export default App;
