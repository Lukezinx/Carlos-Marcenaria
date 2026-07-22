import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Entregas from './pages/Entregas'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/entregas" element={<Entregas />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`} target='_blank' className='fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white rounded-full p-4 shadow-lg z-50 transition-transform hover:scale-110'>
                <FaWhatsapp size={28}/>
            </a>
            <Footer />
        </BrowserRouter>
    )
}