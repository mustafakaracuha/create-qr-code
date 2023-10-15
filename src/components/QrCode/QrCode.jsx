import React, { useRef } from "react";
import QRCode from "react-qr-code";

import { PiDownloadSimpleBold } from "react-icons/pi";


function qrCode({qrValue, back, fore, size}) {
  const svgRef = useRef(null);


  const handleDownload = () => {
    const svg = document.getElementById("qr-svg");
  
    const svgElement = svg.getElementsByTagName("svg")[0];
    svgElement.setAttribute("width", size);
    svgElement.setAttribute("height", size);
  
    const svgData = new XMLSerializer().serializeToString(svg);
  
    const link = document.createElement("a");
    link.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`;
    link.download = `${qrValue}.svg`;
    link.click();
  
    svgElement.setAttribute("width", "256");
    svgElement.setAttribute("height", "256");
  };


  return (
    <>
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
            className="p-4 mr-9 bg-violet-400 transition duration-500 shadow-xl absolute -bottom-12 -right-16 rounded-full"
            onClick={handleDownload}
          >
            <PiDownloadSimpleBold className="text-white" size={23} />
          </button>
        </div>
      )}
    </>
  )
}

export default qrCode
