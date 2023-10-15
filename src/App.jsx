import React, { useState, useEffect, useRef } from "react";

import { IoQrCodeOutline } from "react-icons/io5";
import { MdOutlineColorLens } from "react-icons/md";

import Input from "./components/Input";
import ColorPicker from "./components/ColorPicker";
import SizeSelect from "./components/SizeSelect";
import QrCode from "./components/QrCode";

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

  const refBackPicker = useRef(null);
  const refForePicker = useRef(null);

  const darkColors = [
    "#0F0F0F",
    "#940B92",
    "#4477CE",
    "#E2703A",
    "#183D3D",
    "#734046",
    "#CD1818",
    "#0E8388",
    "#008170",
    "#816797",
    "#735F32",
  ];

  const lightColors = [
    "#FFF8C9",
    "#DFCCFB",
    "#E3F4F4",
    "#FFBFBF",
    "#ADC4CE",
    "#9ED2BE",
    "#D2E0FB",
    "#F1F0E8",
    "#FAF0D7",
    "#FFEEF4",
    "#F3FDE8",
    "#FFF",
  ];

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
  };

  const handleClosePicker = (event) => {
    if (
      refBackPicker.current &&
      !refBackPicker.current.contains(event.target)
    ) {
      setIsBack(false);
    }

    if (
      refForePicker.current &&
      !refForePicker.current.contains(event.target)
    ) {
      setIsFore(false);
    }
  };

  return (
    <div className="w-full min-h-screen" onClick={handleClosePicker}>
      <div className="max-w-md flex flex-col items-center justify-center min-h-screen mx-auto">
        <IoQrCodeOutline size={44} className="mr-12 mb-4 text-indigo-500 animate-pulse" />
        <h1 className="flex items-center justify-center text-4xl mb-7 text-start mr-12 font-semibold text-indigo-400">
          Qr kodunu tasarla
        </h1>

        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Qr kod içeriği"
        />

        <ColorPicker
          color="back"
          colors={lightColors}
          selectedColor={back}
          onColorChange={(color) => setBack(color.hex)}
          setIsOpen={setIsBack}
          isOpen={isBack}
          refPicker={refBackPicker}
          icon={<MdOutlineColorLens size={22} />}
          placeholder={"Arka plan rengi"}
        />

        <ColorPicker
          color="fore"
          colors={darkColors}
          selectedColor={fore}
          onColorChange={(color) => setFore(color.hex)}
          setIsOpen={setIsFore}
          isOpen={isFore}
          refPicker={refForePicker}
          icon={<MdOutlineColorLens color="white" size={22} />}
          placeholder={"Ön plan rengi"}
        />

        <SizeSelect value={size} onChange={handleSizeChange} />

        <QrCode qrValue={qrValue} back={back} fore={fore} size={size} />
      </div>
    </div>
  );
}

export default App;
