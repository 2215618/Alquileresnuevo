import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { properties, comparisonData } from '../data/properties';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {/* Hero */}
            <div className="w-full bg-white dark:bg-[#1a2e24]">
                <div className="flex justify-center w-full">
                    <div className="w-full max-w-[1280px] px-4 md:px-10 py-8 md:py-12">
                        <div className="relative overflow-hidden rounded-xl bg-cover bg-center h-[500px] flex items-center justify-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmW3HlXHw0pCi1m3Pa800JRiWE1yzcfYrt2osNX2VBtudkcbiS6p3ad6kzWzG2cr6oeudEj6wG2J3sqU5txFWIF266mDC-NGrriwzIdKZLboqsSIZL-vmdPl-u8luQf91ykJf8QU8BvsUG-N6gFbM6MEXe-Xtcf6WqDLa9USQt4IOORdFbHISDQmswNZvIxyZDmkFZPiVFdoTps2npIfzKUCorGqsKP8hcsVxx_oOe7VWfJKBZoQgY2rrC2W4AMLjpUnST48zCLw")'}}>
                            <div className="flex flex-col gap-6 items-center max-w-[800px] w-full px-4 z-10">
                                <div className="flex flex-col gap-3 text-center text-white">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">Alquiler mensual a precio fijo en Iquitos</h1>
                                    <h2 className="text-gray-200 text-lg">Comparador por zona: mira el rango por noche y elige estabilidad mensual</h2>
                                </div>
                                <div className="w-full bg-white dark:bg-[#1e2f26] rounded-xl p-4 md:p-2 shadow-xl flex flex-col md:flex-row gap-4 items-center">
                                    <div className="w-full md:w-1/3 px-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 pb-3 md:pb-0">
                                        <label className="flex flex-col w-full">
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 px-1">Distrito</span>
                                            <select className="w-full bg-transparent border-none text-text-main dark:text-white font-medium text-base focus:ring-0 cursor-pointer">
                                                <option>Iquitos Cercado</option>
                                                <option>Punchana</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="w-full md:w-1/4 px-2 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 pb-3 md:pb-0">
                                        <label className="flex flex-col w-full">
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 px-1">Tipo</span>
                                            <select className="w-full bg-transparent border-none text-text-main dark:text-white font-medium text-base focus:ring-0 cursor-pointer">
                                                <option>Todos</option>
                                                <option>Departamento</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="flex-1 px-4"><button className="w-full md:w-12 h-12 flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-[#111814] transition-colors shadow-lg"><span className="material-symbols-outlined">search</span></button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Announcement */}
            <div className="w-full bg-orange-50 dark:bg-orange-900/20 border-y border-orange-100 dark:border-orange-800/30 py-3 flex justify-center">
                <div className="flex items-center gap-2 px-4">
                    <span className="material-symbols-outlined text-orange-500 text-xl">local_fire_department</span>
                    <p className="text-orange-800 dark:text-orange-200 text-sm font-medium">Zona más demandada esta semana: <span className="font-bold">Iquitos Cercado</span> (98% ocupación)</p>
                </div>
            </div>

            {/* Grid */}
            <main className="max-w-[1280px] mx-auto px-6 lg:px-10 py-10 w-full flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-[#111814] text-sm font-semibold">
                            <span className="material-symbols-outlined text-[18px]">grid_view</span> Todos
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#1e2f26] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium">
                            <span className="material-symbols-outlined text-[18px]">pool</span> Piscina
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map(p => (
                        <div onClick={() => navigate(`/details/${p.id}`)} key={p.id} className="group cursor-pointer flex flex-col bg-white dark:bg-[#1a2e24] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-[#2a4034]">
                            <div className="relative h-64 overflow-hidden">
                                <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" fallbackText="Sin Imagen" />
                                <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold uppercase tracking-wider text-[#111814] dark:text-white z-10 flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Disponible
                                </div>
                            </div>
                            <div className="p-5 flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#111814] dark:text-white">{p.title}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{p.district} • {p.address}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-xl font-bold text-primary">S/ {p.price.toLocaleString()}</span>
                                        <span className="text-xs text-gray-400">mensual</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 py-3 border-y border-gray-100 dark:border-gray-700/50">
                                    {p.bedrooms !== null && (
                                        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
                                            <span className="material-symbols-outlined text-lg">bed</span> <span>{p.bedrooms} Hab</span>
                                        </div>
                                    )}
                                    {p.bathrooms !== null && (
                                         <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
                                            <span className="material-symbols-outlined text-lg">shower</span> <span>{p.bathrooms} Baños</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
                                        <span className="material-symbols-outlined text-lg">square_foot</span> <span>{p.area}</span>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded font-medium">{p.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Comparison */}
            <section className="bg-[#f0f4f2] dark:bg-[#162921] py-16 w-full">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-[600px]">
                            <span className="text-primary font-bold uppercase text-sm">Datos del Mercado</span>
                            <h2 className="text-3xl font-black text-[#111814] dark:text-white">Comparador rápido por distrito</h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">¿Por qué pagar por noche? Mira la diferencia versus un alquiler mensual estable.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {comparisonData.map(c => (
                            <div key={c.label} className="bg-white dark:bg-[#1a2e24] p-6 rounded-xl shadow-sm flex flex-col justify-end h-[280px]">
                                <h3 className="text-sm font-bold mb-4 text-center dark:text-white">{c.label}</h3>
                                <div className="flex items-end justify-center gap-4 h-full border-b border-gray-200 dark:border-gray-700 pb-2">
                                    <div className="w-8 bg-gray-300 rounded-t relative group" style={{height: c.h1}}>
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">S/{c.night}</span>
                                    </div>
                                    <div className="w-8 bg-primary rounded-t relative group" style={{height: c.h2}}>
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity">S/{c.monthly}</span>
                                    </div>
                                </div>
                                <p className="text-center text-[10px] text-gray-400 mt-3">Ahorro est. 60%+</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Owner CTA */}
            <section className="w-full bg-[#111814] text-white py-16">
                <div className="max-w-[800px] mx-auto text-center px-6 flex flex-col gap-6 items-center">
                    <span className="bg-white/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">Propietarios</span>
                    <h2 className="text-3xl md:text-5xl font-black">¿QUIERES PROMOCIONAR TU ALQUILER?</h2>
                    <p className="text-gray-400 text-lg">Únete a la red inmobiliaria más grande de la Amazonía. Gestionamos las visitas, contratos y cobros por ti.</p>
                    <button className="bg-primary text-[#111814] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors">Publicar con LG</button>
                </div>
            </section>

            <Footer />
        </div>
    );
};