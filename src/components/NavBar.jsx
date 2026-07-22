import {Link, NavLink} from "react-router-dom"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoCloseOutline } from "react-icons/io5"
import logo from "../assents/logo.png"


export default function NavBar() {

    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <nav className="bg-[#111111] h-20 px-8 flex justify-between items-center shadow-lg border-b border-[#C9A227]/30 sticky top-0 z-[1000]">
            
            
            <Link to="/">
                <div className="h-14 w-44 overflow-hidden flex items-center">

                    <img src={logo} alt="Carlos Marcenaria" className="w-full  object-contain"/>
                </div>
            </Link>

            
            <div className="hidden md:flex gap-8">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive 
                        ? "text-[#C9A227] font-semibold border-b-2 border-[#C9A227] pb-1" 
                        : "text-gray-300 hover:text-[#C9A227] transition-colors duration-200"
                    }
                >
                    Início
                </NavLink>

                <NavLink 
                    to="/projetos"
                    className={({ isActive }) => 
                        isActive 
                        ? "text-[#C9A227] font-semibold border-b-2 border-[#C9A227] pb-1" 
                        : "text-gray-300 hover:text-[#C9A227] transition-colors duration-200"
                    }
                >
                    Projetos
                </NavLink>

                <NavLink to="/entregas" className={({ isActive }) => 
                        isActive 
                        ? "text-[#C9A227] font-semibold border-b-2 border-[#C9A227] pb-1" 
                        : "text-gray-300 hover:text-[#C9A227] transition-colors duration-200"
                    }>Entregas

                </NavLink>

                <NavLink 
                    to="/sobre"
                    className={({ isActive }) => isActive ? "text-[#C9A227] font-semibold border-b-2 border-[#C9A227] pb-1" : "text-gray-300 hover:text-[#C9A227] transition-colors duration-200"}
                >
                    Sobre
                </NavLink>

                <NavLink 
                    to="/contato"
                    className={({ isActive }) => 
                        isActive 
                        ? "text-[#C9A227] font-semibold border-b-2 border-[#C9A227] pb-1" 
                        : "text-gray-300 hover:text-[#C9A227] transition-colors duration-200"
                    }
                >
                    Contato
                </NavLink>
            </div>

            
            <a 
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
                target="_blank"
                className="hidden md:block  bg-[#C9A227] hover:bg-[#b8911f] text-black font-bold px-5 py-2 rounded-lg transition-colors duration-200"
            >
                Fale Conosco
            </a>


            <button className="md:hidden text-white text-3xl" onClick={() => setMenuAberto(!menuAberto)}>
                {menuAberto ? <IoCloseOutline className="icon-animate-hamburgue"/> : <RxHamburgerMenu className="icon-animate-hamburgue"/>}
            </button>


            {menuAberto && (
                <div className="menu-animate md:hidden absolute top-20 left-0 w-full bg-[#111111] flex flex-col items-center gap-6 py-8 border-t border-[#C9A227]/30">
                    <NavLink to="/" onClick={() => setMenuAberto(false)} className={({ isActive }) => isActive ? "text-[#C9A227] font-semibold border-b-2 border-[#C9A227] pb-1" : "text-gray-300 hover:text-[#C9A227] transition-colors duration-200"}>Inicio</NavLink>

                    <NavLink to="/projetos" onClick={() => setMenuAberto(false)} className={({ isActive }) => isActive ? "text-[#C9A227] font-semibold border-b-2 border-[#C9A227] pb-1" : "text-gray-300 hover:text-[#C9A227] transition-colors duration-200"}>Projetos</NavLink>

                    <NavLink to="/entregas" onClick={() => setMenuAberto(false)} className={({ isActive }) => isActive ? "text-[#C9A227] font-semibold border-b-2 border-[#C9A227] pb-1" : "text-gray-300 hover:text-[#C9A227] transition-colors duration-200"}>Entregas</NavLink>

                    <NavLink to="/sobre" onClick={() => setMenuAberto(false)} className={({ isActive }) => isActive ? "text-[#C9A227] font-semibold border-b-2 border-[#C9A227] pb-1" : "text-gray-300 hover:text-[#C9A227] transition-colors duration-200"}>Sobre</NavLink>

                    <NavLink to="/contato" onClick={() => setMenuAberto(false)} className={({ isActive }) => isActive ? "text-[#C9A227] font-semibold border-b-2 border-[#C9A227] pb-1" : "text-gray-300 hover:text-[#C9A227] transition-colors duration-200"}>Contato</NavLink>

                    <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`} className="bg-[#C9A227] text-black font-bold px-5 py-2 rounded-lg">
                        Fale Conosco
                    </a>
                </div>
            )}

        </nav>
    )
}