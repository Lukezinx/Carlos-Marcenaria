import fotoHero from "../assents/fotoHero.jpeg"
import { Link } from "react-router-dom"
import { categorias } from "../data/projetos"
export default function Home() {
    
    return(
        <div>
            <div className="relative h-[calc(100vh-80px)]">
                <img src={fotoHero} className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/60"/>
        
            
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                        Carlos <span className="text-[#C9A227]">Marcenaria</span>
                    </h1>
        
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl drop-shadow-md">
                        Transformamos madeira em arte. Móveis planejados com qualidade e sofisticação.
                    </p>

                    <div className="flex gap-4">
                        <Link 
                            to="/projetos"
                            className="bg-[#C9A227] hover:bg-[#b8911f] text-black font-bold px-8 py-3 rounded-lg transition-colors duration-200">
                            Ver Projetos
                        </Link>

                        
                        <a 
                            href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
                            target="_blank"
                            className="border-2 border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black font-bold px-8 py-3 rounded-lg transition-colors duration-200">
                            Fale Conosco
                        </a>
                    </div>  
                </div>

            </div>
            

            
            <section className="bg-[#1a1a1a] py-16 px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-2">
                    Nossos <span className="text-[#C9A227]">Serviços</span>
                </h2>
                <p className="text-gray-400 text-center mb-12">Conheça nossos trabalhos por categoria</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {categorias.map((cat) => (
                    <Link 
                        key={cat}
                        to={`/projetos?categoria=${cat}`}
                        className="bg-[#2a2a2a] border border-[#C9A227]/20 rounded-xl p-4 md:p-8 text-center hover:border-[#C9A227] hover:scale-105 transition-all duration-200">
                        <p className="text-lg md:text-xl font-bold text-white capitalize whitespace-nowrap">{cat}</p>
                    </Link>
                    ))}
                </div>
            </section>



            <section className="bg-[#111111] py-16 px-8 text-center border-t border-[#C9A227]/20">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Pronto para transformar seu <span className="text-[#C9A227]">espaço?</span>
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Entre em contato e solicite um orçamento sem compromisso.
                </p>

                <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}  target="_blank" className="bg-[#C9A227] hover:bg-[#b8911f] text-black font-bold px-10 py-4 rounded-lg text-lg transition-colors duration-200">
                    💬 Falar no WhatsApp
                </a>
            </section>

        </div>
    ) 
}