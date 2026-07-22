import fabrica from "../assents/fabrica.png"

export default function Sobre() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white">

            
            <div className="bg-[#111111] py-16 px-8 text-center border-b border-[#C9A227]/20">
                <h1 className="text-4xl font-bold mb-4">
                    Nossa <span className="text-[#C9A227]">História</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Décadas de experiência transformando madeira em móveis de qualidade
                </p>
            </div>

            
            <div className="max-w-5xl mx-auto py-16 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    
                    <div>
                        <h2 className="text-2xl font-bold text-[#C9A227] mb-6">
                            Quem é Carlos?
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Carlos começou sua jornada na marcenaria aos 13 anos, 
                            aprendendo o ofício desde cedo e desenvolvendo uma paixão 
                            genuína pelo trabalho com madeira.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Com décadas de experiência, hoje é especialista em móveis 
                            planejados em MDF, entregando projetos que combinam 
                            funcionalidade, durabilidade e sofisticação.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Cada projeto é tratado com cuidado e atenção aos detalhes, 
                            garantindo que o resultado final supere as expectativas do cliente.
                        </p>
                    </div>

                    
                    <div className="rounded-2xl overflow-hidden border border-[#C9A227]/20">
                        <img 
                            src={fabrica} 
                            alt="Oficina Carlos Marcenaria" 
                            className="w-full h-80 object-cover"
                        />
                    </div>

                </div>
            </div>

            
            <div className="bg-[#111111] py-16 px-8 border-t border-[#C9A227]/20">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    
                    <div>
                        <p className="text-5xl font-bold text-[#C9A227] mb-2">+30</p>
                        <p className="text-white font-semibold">Anos de Experiência</p>
                        <p className="text-gray-400 text-sm mt-1">Desde os 13 anos no ofício</p>
                    </div>

                    <div>
                        <p className="text-5xl font-bold text-[#C9A227] mb-2">100%</p>
                        <p className="text-white font-semibold">Dedicação</p>
                        <p className="text-gray-400 text-sm mt-1">Em cada projeto entregue</p>
                    </div>

                    <div>
                        <p className="text-5xl font-bold text-[#C9A227] mb-2">∞</p>
                        <p className="text-white font-semibold">Projetos Realizados</p>
                        <p className="text-gray-400 text-sm mt-1">Cozinhas, armários e muito mais</p>
                    </div>

                </div>
            </div>

            
            <div className="py-16 px-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Vamos criar algo <span className="text-[#C9A227]">juntos?</span>
                </h2>
                <a 
                    href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
                    target="_blank"
                    className="bg-[#C9A227] hover:bg-[#b8911f] text-black font-bold px-10 py-4 rounded-lg text-lg transition-colors duration-200 inline-block"
                >
                    💬 Falar no WhatsApp
                </a>
            </div>

        </div>
    )
}