export default function LinkWhatsApp(telNumber, mensage) {

  function link(telNumber, mensage) {



    return `https://api.whatsapp.com/send/?phone=55${telNumber}&text=${mensage}=phone_number&app_absent=0`;
  }

  return (
    <button className="w-full h-12 rounded-xl p-7 bg-white font-bold text-xl flex justify-center items-center" id="submit" type="submit">copy mensage</button>
  )
}