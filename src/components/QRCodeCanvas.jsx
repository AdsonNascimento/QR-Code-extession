import React, { useEffect, useRef } from "react"
import QRCode from "qrcode"

export default function QRCodeCanvas({ urlLink }) {
    const canvasRef = useRef()

    if(!urlLink) {
        urlLink = "hello, word!"
    }

    useEffect(() => {
        QRCode.toCanvas(canvasRef.current, urlLink, { width: 177, margin: 1 }, (error) => {
            if (error == Error) {
                console.log(error)
            }
        })
    }, [urlLink])

    return (
        <div>
            <canvas className="rounded-xl" ref={canvasRef} id="canvas"></canvas>
        </div>
    )
}