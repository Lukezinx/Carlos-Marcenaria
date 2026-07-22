import { Link } from "react-router-dom"

// trocar numero e gmail

export default function Footer() {
    return (
        <footer className="bg-[#111111] border-t border-[#C9A227]/20 py-12 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                
                
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">
                        Carlos <span className="text-[#C9A227]">Marcenaria</span>
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Móveis planejados com qualidade, sofisticação e amor pelo trabalho.
                    </p>
                </div>

                
                <div className="text-center md:text-left">
                    <h4 className="text-[#C9A227] font-semibold mb-4">Links Rápidos</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/" className="hover:text-[#C9A227] transition">Início</Link></li>
                        <li><Link to="/projetos" className="hover:text-[#C9A227] transition">Projetos</Link></li>
                        <li><Link to="/entregas" className="hover:text-[#C9A227] transition">Entregas</Link></li>
                        <li><Link to="/sobre" className="hover:text-[#C9A227] transition">Sobre</Link></li>
                        <li><Link to="/contato" className="hover:text-[#C9A227] transition">Contato</Link></li>
                    </ul>
                </div>

                
                <div className="text-center md:text-left">
                    <h4 className="text-[#C9A227] font-semibold mb-4">Contato</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>📧 CarlosMoveisPlanejados@gmail.com</li>
                        <li>📍 Belford-Roxo, Rio de Janeiro</li>
                    </ul>
                </div>

            </div>

            
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Carlos Marcenaria. Todos os direitos reservados.
            </div>
        </footer>
    )
}
