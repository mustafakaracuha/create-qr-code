import React, { useState, useEffect, useRef } from "react";
import QRCode from "react-qr-code";
import { TwitterPicker } from "react-color";
import { PiDownloadSimpleBold } from "react-icons/pi";

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

  const svgRef = useRef(null);

  const colors = [
    "#0F0F0F",
    "#6D67E4",
    "#008170",
    "#F39F5A",
    "#AE445A",
    "#C147E9",
    "#4477CE",
    "#CD1818",
    "#03C988",
    "#FFF",
  ];

  const handleClosePicker = () => {
    isBack || isFore ? setIsBack(false) || setIsFore(false) : "";
  };

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
  };

  const handleDownload = () => {
    const svg = document.getElementById("qr-svg");

    const svgElement = svg.getElementsByTagName("svg")[0];
    svgElement.setAttribute("width", size);
    svgElement.setAttribute("height", size);

    const svgData = new XMLSerializer().serializeToString(svg);

    const link = document.createElement("a");
    link.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      svgData
    )}`;
    link.download = `${qrValue}.svg`;
    link.click();

    svgElement.setAttribute("width", "256");
    svgElement.setAttribute("height", "256");
  };

  return (
    <div
      className="max-w-md flex flex-col items-center justify-center min-h-screen mx-auto"
      onClick={handleClosePicker}
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
            className="rounded-full w-5 p-1 h-5 bg-indigo-400 ml-4 outline-none transition duration-500 active:scale-110"
          ></button>
        </div>
        {isBack && (
          <div className="absolute top-[4.5em] left-0 z-50">
            <TwitterPicker
              colors={colors}
              triangle="Hide"
              className="foreInput"
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
            className="rounded-full w-5 h-5 bg-amber-500 ml-4 outline-none transition duration-500 active:scale-110"
          ></button>
        </div>
        {isFore && (
          <div className="absolute top-[4.5em] left-0 z-50">
            <TwitterPicker
              onSwatchHover
              colors={colors}
              triangle="Hide"
              className="foreInput"
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

      {qrValue && (
        <div className="relative">
          <div
            id="qr-svg"
            ref={svgRef}
            className="mt-8 mr-8 -z-1 rounded-2xl overflow-hidden shadow-xl"
          >
            <QRCode
              value={qrValue}
              bgColor={back}
              fgColor={fore}
              size={256}
              level="H"
            />
          </div>

          <button
            className="p-4 mr-9 bg-amber-400 transition duration-500 shadow-xl absolute -bottom-12 -right-16 rounded-full"
            onClick={handleDownload}
          >
            <PiDownloadSimpleBold className="text-white" size={23} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
