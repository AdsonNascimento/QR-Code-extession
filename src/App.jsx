import { useState } from 'react'
import './App.css'
import QRCodeCanvas from './components/QRCodeCanvas.jsx';
import DownloadQRCode from './components/DownloadQRCode.jsx'

export default function App() {
  const [urlLink, setUrlLink] = useState(localStorage.getItem("urlLink") || "Hello, word!")
  const [sizeQrCode, setSizeQrCode] = useState(200)
  const updateSize = () => {
    setSizeQrCode(document.getElementById('size').value)
  }

  const handleUrlLink = (event) => {
    setUrlLink(event.target.value);
    localStorage.setItem("urlLink", event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className="App">
      <QRCodeCanvas urlLink={urlLink} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="url-link">Write the url:</label>
        <input id="url-link" name="url-link" type="text" value={urlLink} onChange={handleUrlLink} autoComplete='off' placeholder="Hello, word!" />

        <div className="qrcode-size">
          <label htmlFor="size">size of qrcode</label>
          <select id="size" name="size" list="sizes" required="required" onChange={updateSize}>
            <option value="200">200px</option>
            <option value="500">500px</option>
            <option value="1000">1000px</option>
            <option value="2000">2000px</option>
          </select>
        </div>

        <DownloadQRCode urlLink={urlLink} sizeQrCode={sizeQrCode}></DownloadQRCode>
      </form>
    </main>
  )
}
