import React, { useEffect, useRef } from "react"
import QRCode from "qrcode"

export default function DownloadQRCode({ urlLink, sizeQrCode }) {
  const canvasRef = useRef()

  if (!urlLink) {
    urlLink = "Hello world!"
  }

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, urlLink, { width: `${sizeQrCode}`, margin: 1 }, (error) => {
      if (error == Error) {
        console.log(error)
      }
    })
  }, [sizeQrCode, urlLink])

  function download() {
    const canvas = document.getElementById('dowloadCanvas');
    const dataUrl = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'imagem.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <>
      <button className="w-full h-12 rounded-xl p-7 bg-white font-bold text-xl flex justify-center items-center" id="submit" onClick={download} type="submit">download</button>
      <canvas ref={canvasRef} id="dowloadCanvas" style={{ width: `${sizeQrCode}px`, height: `${sizeQrCode}px`, display: "none" }}></canvas>
    </>
  )
}
