import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full">
                <nav>
                    <ul className="h-10 flex items-center justify-around">
                        <li><Link href="/" className="links">QrCode</Link></li>
                        <li><Link href="/whatsapp" className="links">Link WhatsApp</Link></li>
                    </ul>
                </nav>
        </header>
    )
}