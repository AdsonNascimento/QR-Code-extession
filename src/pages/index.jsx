import { useState } from 'react';
import QRCodeCanvas from '../components/QRCodeCanvas.jsx';
import DownloadQRCode from '../components/DownloadQRCode.jsx';

export default function Home() {
  const [urlLink, setUrlLink] = useState('')
  const [sizeQrCode, setSizeQrCode] = useState(200)
  
  const updateSize = () => {
    setSizeQrCode(document.getElementById('size').value)
  }

  const handleUrlLink = (event) => {
    setUrlLink(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className='w-full default-flex items-center gap-8'>

      <QRCodeCanvas urlLink={urlLink} />

      <form className='w-full' onSubmit={handleSubmit}>
        <label className='w-full' htmlFor="url-link">Write the url:</label><br />
        <input className='w-full h-12 rounded-xl p-4 mb-9' id="url-link" name="url-link" type="text" value={urlLink} onChange={handleUrlLink} autoComplete='off' placeholder="Hello world!" />

        <div className="qrcode-size flex justify-between">
          <label htmlFor="size">Size of qrcode:</label>
          <select className='w-48 h-12 rounded-xl p-3 pl-6 mb-8 text-xl font-medium' id="size" name="size" list="sizes" required="required" onChange={updateSize}>
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