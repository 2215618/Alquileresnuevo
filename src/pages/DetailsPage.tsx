import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { properties } from '../data/properties';

export const DetailsPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [months, setMonths] = useState(12);
    
    // Find property by ID, fallback to P003 if not found (or handle error)
    const property = properties.find(p => p.id === id) || properties[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!property) return <div>Cargando...</div>;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <nav className="flex mb-6 text-sm gap-2">
                    <Link to="/" className="text-gray-500">Inicio</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-primary font-medium">{property.id} {property.type}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">{property.title}</h1>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                <span className="material-symbols-outlined text-[20px] mr-1">location_on</span>
                                <span className="text-base">{property.address}, {property.district}, Perú</span>
                            </div>
                        </div>

                        <div className="bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
                            <div className="aspect-video w-full bg-gray-100">
                                <ImageWithFallback src={property.image} alt={property.title} className="w-full h-full object-cover" fallbackText="Vista Principal" />
                            </div>
                            <div className="flex border-t border-gray-100 dark:border-gray-800 overflow-x-auto">
                                <button className="flex-1 min-w-[100px] py-4 border-b-2 border-primary text-primary font-bold">General</button>
                                <button className="flex-1 min-w-[100px] py-4 border-b-2 border-transparent text-gray-400">Cocina</button>
                                <button className="flex-1 min-w-[100px] py-4 border-b-2 border-transparent text-gray-400">Habitación</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                {icon: 'home_pin', label: 'Dirección', value: property.address},
                                {icon: 'map', label: 'Distrito', value: property.district},
                                {icon: 'straighten', label: 'Área', value: property.area},
                                {icon: 'chair', label: 'Estado', value: property.status}
                            ].map((item, idx) => (
                                <div key={idx} className="p-4 bg-white dark:bg-card-dark rounded-xl border border-gray-100 dark:border-gray-800 text-center space-y-2">
                                    <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">{item.label}</p>
                                        <p className="font-bold text-gray-900 dark:text-white truncate" title={item.value}>{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-50 dark:bg-[#1a3326]/50 rounded-2xl p-6 border border-gray-200 dark:border-primary/20">
                            <h3 className="text-xl font-bold mb-6">Comparativa de Costos</h3>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm text-gray-500"><span>Precio Mercado (30 noches x S/ 150 avg)</span><span>S/ 4,500</span></div>
                                    <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-gray-400 w-full"></div></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="font-bold">Tu Precio LG (Mensual)</span>
                                        <span className="text-2xl font-black text-primary">S/ {property.price.toLocaleString()}</span>
                                    </div>
                                    <div className="h-6 w-full bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary" style={{width: '35%'}}></div>
                                    </div>
                                    <p className="text-sm font-semibold text-primary">Ahorras considerablemente comparado con alquiler diario</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-card-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <h3 className="text-lg font-bold mb-6">Duración del contrato</h3>
                            <input type="range" min="1" max="24" value={months} onChange={(e) => setMonths(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                            <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400 uppercase"><span>1 Mes</span><span>12 Meses</span><span>24 Meses</span></div>
                            <div className="mt-6 flex items-center gap-4 bg-primary/10 p-4 rounded-lg">
                                <span className="material-symbols-outlined text-primary">calendar_month</span>
                                <p className="text-sm">Has seleccionado <span className="font-bold">{months} meses</span>. Contratos {'>'} 6 meses incluyen mantenimiento gratuito.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-white dark:bg-card-dark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-500">Alquiler mensual</span>
                                    <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded">MEJOR PRECIO</span>
                                </div>
                                <div className="flex items-end gap-1 mb-6">
                                    <span className="text-4xl font-black">S/ {property.price.toLocaleString()}</span>
                                    <span className="text-gray-500 mb-1">/ mes</span>
                                </div>
                                <button onClick={() => navigate(`/reserve/${property.id}`)} className="w-full bg-primary hover:bg-primary-dark text-[#111814] font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mb-4">
                                    Quiero reservar <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <p className="text-center text-[10px] text-gray-400">Sin comisiones ocultas. Trato directo.</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-card-dark rounded-xl p-4 border border-gray-200 flex items-center gap-4">
                                <div className="size-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">LG</div>
                                <div>
                                    <p className="text-sm font-bold">LG Agencia Inmobiliaria</p>
                                    <div className="flex items-center gap-1 text-[10px] text-yellow-500 font-bold">
                                        <span className="material-symbols-outlined text-xs fill-current">star</span> <span>4.9 (120 reseñas)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};