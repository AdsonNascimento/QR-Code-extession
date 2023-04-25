import LinkWhatsApp from "@/components/LinkWhatsApp"
import { useState } from "react"

export default function WhatsAppPage() {
  const [number, setNumber] = useState('')
  const [mensage, setMesage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleNumber = (event) => {
    setNumber(event.target.value);
  }

  const handleMensage = (event) => {
    setMesage(event.target.value);
  }

  return (
    <main className='w-full default-flex items-center gap-8'>
      <form className='w-full' onSubmit={handleSubmit}>

        <label className='w-full' htmlFor="number">Write the number:</label><br />
        <input
          className='w-full h-12 rounded-xl p-4 mb-9'
          value={number}
          onChange={handleNumber}
          id="number"
          name="number"
          type="tel"
          autoComplete='off'
          placeholder="DDDNUMBER"
          maxLength="11"
        />

        <label className='w-full' htmlFor="mensage">Write the text:</label><br />
        <textarea
          className='w-full rounded-xl p-4 mb-9'
          value={mensage}
          onChange={handleMensage}
          name="mensage"
          id="mensage"
          rows="3">
        </textarea>

        <LinkWhatsApp number={number} mensage={mensage} />
      </form>
    </main>
  )
}