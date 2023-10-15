import React, { useRef } from "react";
import QRCode from "react-qr-code";

import ShareButtons from "../ShareButtons";


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
  
    svgElement.setAttribute("width", "220");
    svgElement.setAttribute("height", "220");
  };


  return (
    <>
      {qrValue && (
        <div className="flex">
          <div
            title="Qr kod"
            id="qr-svg"
            ref={svgRef}
            className="mt-8 mr-5 -z-1 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          >
            <QRCode
              value={qrValue}
              bgColor={back}
              fgColor={fore}
              size={220}
              level="H"
            />
          </div>

          <ShareButtons handleDownload={handleDownload} back={back} fore={fore}/>
        </div>
      )}
    </>
  )
}

export default qrCode
