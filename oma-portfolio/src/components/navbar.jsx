import { useState } from 'react'
import ShinyText from './ShinyText.jsx'
import { Home, Folder, Info, Mail, Menu, X } from 'lucide-react'
import logo from '../assets/logo1.png'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full backdrop-filter backdrop-blur-xl bg-opacity-20 text-white border-b border-white/10 z-50">
      
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        


<h2 className="flex items-center gap-2 text-3xl font-small tracking-tight">Niilo.</h2>

        
        <ul className="hidden md:flex items-center gap-8">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            <Home size={18} /> Etusivu
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            <Folder size={18} /> Projektit
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            <Info size={18} /> Tietoa
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
            <Mail size={18} /> Yhteydenotto
          </li>
        </ul>

        
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </nav>

      
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 pb-6">
          <ul className="flex flex-col gap-6 mt-4">
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition">
              <Home size={18} /> Etusivu
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition">
              <Folder size={18} /> Projektit
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition">
              <Info size={18} /> Tietoa
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition">
              <Mail size={18} /> Yhteydenotto
            </li>
          </ul>
        </div>
      )}

    </header>
  )
}

export default Navbar