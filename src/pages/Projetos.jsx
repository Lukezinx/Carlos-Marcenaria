import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import {projetos, categorias} from "../data/projetos"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function Projetos() {
    const [searchParams] = useSearchParams();
    const categoriaUrl = searchParams.get("categorias")
    const [filtroAtivo, setFiltroAtivo] = useState(categoriaUrl || "todos");
    const [projetoSelecionado, setProjetoSelecionado] = useState(null)
    const [fotoAtual, setFotoAtual] = useState(0)

    const projetosFiltrados = filtroAtivo === "todos" ? projetos : projetos.filter(p => p.categoria === filtroAtivo);

    return(
        <div className="min-h-screen bg-[#1a1a1a] py-12 px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">  

                Nossos <span className="text-[#C9A227]">Projetos</span>

            </h1>

            <p className="text-gray-400 text-center mb-10">Conheça nossos trabalhos</p>

            <div className="flex flex-wrap gap-3 justify-center mb-10">

                {["todos", ...categorias].map((cat => (
                    <button 
                    key={cat} 
                    onClick={() => setFiltroAtivo(cat)}
                    className={filtroAtivo === cat
                        ? 'bg-[#C9A227] text-black font-bold px-6 py-2 rounded-full capitalize'
                        : 'border border-[#C9A227] text-[#C9A227] px-6 py-2 rounded-full hover:bg-[#C9A227] hover:text-black transition capitalize'
                    }
                    >
                        {cat}
                    </button>
                )))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {projetosFiltrados.map((projeto => (
                    <div key={projeto.id} 
                    className="rounded-xl overflow-hidden group cursor-pointer" 
                    onClick={() => {
                        setProjetoSelecionado(projeto) 
                        setFotoAtual(0)}}>

                        <img className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                        src={projeto.imagens[0]} 
                        alt={projeto.titulo}/>

                        <p className="text-white font-semibold capitalize">{projeto.titulo}</p>
                        <p className="text-[#C9A227] text-sm capitalize">{projeto.categoria}</p>
                    </div>
                )))}
            </div>

            {projetoSelecionado && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setProjetoSelecionado(null)}>
                    <div className="relative max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                        <img src={projetoSelecionado.imagens[fotoAtual]} alt={projetoSelecionado.titulo} className="max-w-full max-h-[80vh] w-auto h-auto mx-auto object-contain rounded-lg"/>

                        <button onClick={() => setProjetoSelecionado(null)} 
                        className="absolute top-2 right-2 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80">
                            X
                        </button>


                        {projetoSelecionado.imagens.length > 1 && (
                            <>
                                <button onClick={() => setFotoAtual(prev => prev === 0 ? projetoSelecionado.imagens.length : prev -1 )} className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                    <MdChevronLeft size={28}/>
                                </button>

                                <button onClick={() => setFotoAtual(prev => prev === projetoSelecionado.imagens.length -1 ? 0 : prev + 1)} className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                    <MdChevronRight size={28}/>
                                </button>
                            </>
                        )}


                        <div className="text-center mt-4">
                            <p className="text-white font-bold text-xl">{projetoSelecionado.titulo}</p>
                            <p className="text-gray-400 text-sm mt-1">{fotoAtual + 1} / {projetoSelecionado.imagens.length}</p>
                        </div>

                    </div>

                </div>
            )}
            


        </div>
    )
}