import LinkWhatsApp from "@/components/LinkWhatsApp"
import { useState } from "react"

export default function WhatsAppPage() {
  const [number, setNumber] = useState('')
  const [mensage, setMesage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMesage('')
  }

  const handleNumber = (event) => {
    const onlyNumbers = event.target.value.replace(/[^0-9]/g, '');
    const key = event.keyCode || event.charCode;

    if (onlyNumbers === event.target.value || key === 8 || key === 8) {
      setNumber(onlyNumbers);
    } else {
      alert('Enter only numbers!');
    }
  }

  const handleMensage = (event) => {
    setMesage(event.target.value);
  }

  return (
    <main className='w-full default-flex items-center gap-8'>
      <form className='w-full' onSubmit={handleSubmit}>

        <label className='w-full' htmlFor="number">Phone number:</label><br />
        <input
          className='w-full h-12 rounded-xl p-4 mb-9'
          value={number}
          onChange={handleNumber}
          id="number"
          name="number"
          type="tel"
          autoComplete='off'
          maxLength="15"
          placeholder="Only numbers"
          required
        />

        <label className='w-full' htmlFor="mensage">Write the text:</label><br />
        <textarea
          className='w-full rounded-xl p-4 mb-9'
          value={mensage}
          onChange={handleMensage}
          name="mensage"
          id="mensage"
          rows="3"
          maxLength="900"
          required>
        </textarea>

        <LinkWhatsApp telNumber={number} mensage={mensage} />
      </form>
    </main>
  )
}