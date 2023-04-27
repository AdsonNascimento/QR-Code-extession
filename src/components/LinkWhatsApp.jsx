import { Check } from "@phosphor-icons/react";
import { useState } from "react";

export default function LinkWhatsApp({ country, telNumber, mensage }) {

  function htmlDecode(text) {
    var doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent;
  }

  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // Adiciona o textarea na página
    document.body.appendChild(textarea);

    // Seleciona o conteúdo do textarea
    textarea.select();

    // Copia o conteúdo selecionado para a área de transferência
    document.execCommand('copy');

    // Remove o textarea da página
    document.body.removeChild(textarea);
  }

  const [btn, setBtn] = useState('copy mensage')

  function ok() {
    setBtn([
      <Check size={16} color="#000" />,
      <span>copyed!</span>
    ])

    setTimeout(() => {
      setBtn('copy mensage')
    }, 1250)
  }

  function handleLink() {
    const formattedMensage = htmlDecode(mensage).trim().replace(/\s/g, '+');
    const url = `https://api.whatsapp.com/send/?phone=${country}${telNumber}&text=${formattedMensage}&app_absent=0`;

    if (telNumber, mensage) {
      copyToClipboard(url)
      ok()
    }
  }

  return (
    <button
      className="w-full h-12 rounded-xl p-7 bg-white font-bold text-xl flex justify-center items-center gap-2"
      id="submit"
      type="submit"
      onClick={handleLink}
    >
      {btn}
    </button>
  );
}
