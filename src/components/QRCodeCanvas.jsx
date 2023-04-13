import React, { useEffect, useRef } from "react"
import QRCode from "qrcode"

export default function QRCodeCanvas({ urlLink }) {
    const canvasRef = useRef()

    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, urlLink, { width: 177 }, (error) => {
            if(error == Error) {
                console.log(error)
            }
        })
    }, [urlLink])

    return (
        <div>
            <canvas ref={canvasRef} id="canvas"></canvas>
        </div>
    )
}