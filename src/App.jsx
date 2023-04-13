import { useState } from 'react'
import './App.css'
import QRCodeCanvas from './components/QRCodeCanvas.jsx';

export default function App() {
  const [urlLink, setUrlLink] = useState("")

  const handUrlLink = (event) => {
    setUrlLink(event.target.value);
  }
  
  return (
    <main className="App">
      <QRCodeCanvas urlLink={urlLink}></QRCodeCanvas>

      <form>
          <label htmlFor="url-link">Write the url:</label>
          <input id="url-link" name="url-link" type="urlLink" value={urlLink} onChange={handUrlLink} />

          <div className="bnt-size">
              <input type="button" name="size" value="200" />
              <input type="button" name="size" value="500" />
              <input type="button" name="size" value="1000" />
              <input type="button" name="size" value="2000" />
          </div>

          <button type="submit">download</button>
      </form>
    </main>
  )
}