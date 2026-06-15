import React, { useRef } from "react";
import QRCode from "react-qr-code";

import ShareButtons from "../ShareButtons";


function qrCode({qrValue, back, fore, size}) {
  const svgRef = useRef(null);

  const handleDownload = () => {
    const svgContainer = document.getElementById("qr-svg");
    if (!svgContainer) return;

    const svgElement = svgContainer.getElementsByTagName("svg")[0];
    if (!svgElement) return;

    // Use a high-resolution export size (e.g. 2000px)
    const exportSize = 2000;

    const clonedSvg = svgElement.cloneNode(true);
    clonedSvg.setAttribute("width", exportSize.toString());
    clonedSvg.setAttribute("height", exportSize.toString());

    const svgString = new XMLSerializer().serializeToString(clonedSvg);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const blobURL = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = exportSize;
      canvas.height = exportSize;
      const context = canvas.getContext("2d");

      context.clearRect(0, 0, exportSize, exportSize);
      context.drawImage(image, 0, 0, exportSize, exportSize);

      const pngURL = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = pngURL;
      link.download = `${qrValue || "qrcode"}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobURL);
    };
    image.onerror = (err) => {
      console.error("PNG conversion failed:", err);
      URL.revokeObjectURL(blobURL);
    };
    image.src = blobURL;
  };


  return (
    <>
      {qrValue && (
        <div className="flex">
          <div
            title="Qr kod"
            id="qr-svg"
            ref={svgRef}
            className="mt-8 -z-1 ml-6 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
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
