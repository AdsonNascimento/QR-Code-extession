import '@/styles/globals.css'
import Header from "@/components/Header"


export default function App({ Component, pageProps }) {
  return (

    <div className=' bg-gradient-to-b from-cyan-500 to-blue-500 w-[30rem] default-flex items-center p-8 gap-6'>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
