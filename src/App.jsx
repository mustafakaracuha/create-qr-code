import React, { useState, useEffect } from "react";

import QRCode from "react-qr-code";
import { TwitterPicker } from "react-color";

import { IoQrCodeOutline } from 'react-icons/io5';

function App() {
  const [value, setValue] = useState("");
  const [back, setBack] = useState("#FFFFFF");
  const [isBack, setIsBack] = useState(false);

  const [fore, setFore] = useState("#000000");
  const [isFore, setIsFore] = useState(false);

  const [size, setSize] = useState(250);
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    setQrValue(value);
  }, [value, back, fore, size]);

  const handleClosePicker = () => {
  (isBack || isFore) ? setIsBack(false) || setIsFore(false) : ""
  }

  return (
    <div className="max-w-md flex flex-col items-center justify-center min-h-screen mx-auto" onClick={handleClosePicker}>
      <IoQrCodeOutline className="mr-9 mb-3 text-indigo-400"  size={55}/>
      <h1 className="flex items-center justify-center text-4xl mb-7 text-start mr-9 font-semibold text-indigo-400"> Qr kodunu yarat
      </h1>

      <div className="w-full flex items-center justify-center mr-9 relative mb-4">
          <input
            className="w-[300px] bg-gray-100 h-16 outline-none border-2 border-transparent rounded-xl transition duration-300 px-4 focus:border-gray-200"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Qr kod değeri"
          />
      </div>

      {/* Back */}
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
            className="rounded-full w-5 p-1  h-5 bg-indigo-400 ml-4 outline-none transition duration-500 active:scale-110"
          ></button>
        </div>
        {isBack && (
          <div className="absolute top-[4.5em] left-0 z-50">
            <TwitterPicker
              triangle="Hide"
              className="foreInput"
              onChange={(color) => setBack(color.hex)}
            />
          </div>
        )}
      </div>

      {/* Fore */}
      <div className="flex flex-col items-center justify-center relative">
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
            className="rounded-full w-5 h-5 bg-amber-500 ml-4 outline-none transition duration-500 active:scale-110"
          ></button>
        </div>
        {isFore && (
          <div className="absolute top-[4.5em] left-0 z-50">
            <TwitterPicker
              triangle="Hide"
              className="foreInput"
              onChange={(color) => setFore(color.hex)}
            />
          </div>
        )}
      </div>
      {qrValue &&  (
        <div className="mt-8 mr-8 -z-1 rounded-2xl overflow-hidden">
          <QRCode
            value={qrValue}
            bgColor={back}
            fgColor={fore}
            size={size}
            level="H"
          />
        </div>
      )}
    </div>
  );
}

export default App;
