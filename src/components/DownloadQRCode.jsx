import React, { useEffect, useRef } from "react"
import QRCode from "qrcode"

export default function DownloadQRCode({ urlLink, sizeQrCode }) {
  const canvasRef = useRef()

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
      <button id="submit" onClick={download} type="submit">download</button>
      <canvas ref={canvasRef} id="dowloadCanvas" style={{ width: `${sizeQrCode}px`, height: `${sizeQrCode}px`, display: "none" }}></canvas>

    </>
  )
}
