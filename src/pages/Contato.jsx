import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { FaClock } from 'react-icons/fa'


export default function Contato() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white">

            
            <div className="bg-[#111111] py-16 px-8 text-center border-b border-[#C9A227]/20">
                <h1 className="text-4xl font-bold mb-4">
                    Entre em <span className="text-[#C9A227]">Contato</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Solicite um orçamento sem compromisso. Respondemos rapidamente!
                </p>
            </div>

            
            <div className="max-w-4xl mx-auto py-16 px-4 md:px-8">

                
                <div className="bg-green-900/30 border border-green-500/30 rounded-2xl p-8 text-center mb-12">
                    <FaWhatsapp className="text-green-400 text-6xl mx-auto mb-4"/>
                    <h2 className="text-2xl font-bold text-white mb-2">Fale pelo WhatsApp</h2>
                    <p className="text-gray-400 mb-6">A forma mais rápida de entrar em contato</p>
                    <a
                        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
                        target="_blank"
                        className="bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors duration-200 inline-flex items-center gap-2"
                    >
                        <FaWhatsapp/> Iniciar Conversa
                    </a>
                </div>

                

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <div className="bg-[#2a2a2a] border border-[#C9A227]/20 rounded-xl p-6 text-center hover:border-[#C9A227]/50 transition">
                        <MdEmail className="text-[#C9A227] text-4xl mx-auto mb-3"/>
                        <h3 className="text-white font-semibold mb-1">Email</h3>
                        <p className="text-gray-400 text-sm">CarlosMoveisPlanejados@gmail.com</p>
                    </div>

                    <div className="bg-[#2a2a2a] border border-[#C9A227]/20 rounded-xl p-6 text-center hover:border-[#C9A227]/50 transition">
                        <IoLocationSharp className="text-[#C9A227] text-4xl mx-auto mb-3"/>
                        <h3 className="text-white font-semibold mb-1">Localização</h3>
                        <p className="text-gray-400 text-sm">Rio de Janeiro, Belford-Roxo</p>
                    </div>

                    <div className="bg-[#2a2a2a] border border-[#C9A227]/20 rounded-xl p-6 text-center hover:border-[#C9A227]/50 transition">
                        <FaClock className="text-[#C9A227] text-4xl mx-auto mb-3"/>
                        <h3 className="text-white font-semibold mb-1">Horário</h3>
                        <p className="text-gray-400 text-sm">Seg - Sex: 8h às 18h</p>
                    </div>

                </div>

            </div>
        </div>
    )
}