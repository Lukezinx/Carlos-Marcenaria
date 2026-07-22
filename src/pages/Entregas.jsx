import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
})

L.Marker.mergeOptions({ icon: DefaultIcon })


// Coordenadas de Belford Roxo
const CENTRO = [-22.7644, -43.3994]
const RAIO_KM = 50000 // em metros

const cidadesAtendidas = [
    "Belford Roxo", "Nova Iguaçu", "São João de Meriti",
    "Duque de Caxias", "Nilópolis", "Mesquita",
    "Niterói", "São Gonçalo", "Rio de Janeiro",
    "Barra da Tijuca", "Madureira", "Bangu"
]

export default function Entregas() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white">

            <div className="bg-[#111111] py-16 px-8 text-center border-b border-[#C9A227]/20">
                <h1 className="text-4xl font-bold mb-4">
                    Área de <span className="text-[#C9A227]">Entrega</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Atendemos num raio de até 50km a partir de Belford Roxo
                </p>
            </div>


            <div className="max-w-6xl mx-auto py-12 px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    
                    <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-[#C9A227]/20 h-96 lg:h-auto">
                        <MapContainer 
                            center={CENTRO} 
                            zoom={9} 
                            style={{ height: '100%', minHeight: '400px' }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; OpenStreetMap'
                            />
                            
                            
                            <Marker position={CENTRO}>
                                <Popup>Carlos Marcenaria — Belford Roxo</Popup>
                            </Marker>


                            <Circle
                                center={CENTRO}
                                radius={RAIO_KM}
                                pathOptions={{ 
                                    color: '#C9A227', 
                                    fillColor: '#C9A227', 
                                    fillOpacity: 0.1 
                                }}
                            />
                        </MapContainer>
                    </div>

                    
                    <div className="flex flex-col gap-6">

                        
                        <div className="bg-[#2a2a2a] border border-[#C9A227]/20 rounded-2xl p-6">
                            <h2 className="text-[#C9A227] font-bold text-lg mb-4">
                                Cidades Atendidas
                            </h2>
                            <div className="grid grid-cols-2 gap-2">
                                {cidadesAtendidas.map((cidade) => (
                                    <div key={cidade} className="flex items-center gap-2 text-gray-300 text-sm">
                                        <span className="text-[#C9A227]">✓</span>
                                        {cidade}
                                    </div>
                                ))}
                            </div>
                        </div>

                        
                        <div className="bg-[#2a2a2a] border border-yellow-600/30 rounded-2xl p-6">
                            <h2 className="text-yellow-400 font-bold text-lg mb-3">
                                Fora da área?
                            </h2>
                            <p className="text-gray-400 text-sm mb-4">
                                Se você está além dos 50km, entre em contato! 
                                Dependendo do projeto, podemos negociar a entrega.
                            </p>
                            
                            
                            <a
                                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP}`}
                                target="_blank"
                                className="bg-[#C9A227] hover:bg-[#b8911f] text-black font-bold px-4 py-2 rounded-lg text-sm transition w-full text-center block"
                            >
                                💬 Negociar Entrega
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}