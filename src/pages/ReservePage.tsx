import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { properties } from '../data/properties';

export const ReservePage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const property = properties.find(p => p.id === id) || properties[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const [formData, setFormData] = useState({
        name: '',
        dni: '',
        email: '',
        whatsapp: ''
    });

    const handleWhatsAppSubmit = () => {
        const phone = "51965608934";
        const message = `Hola, quiero reservar la propiedad ${property.id} (${property.title}).%0A%0A` +
                        `*Mis datos:*%0A` +
                        `Nombre: ${formData.name}%0A` +
                        `DNI: ${formData.dni}%0A` +
                        `WhatsApp: ${formData.whatsapp}%0A%0A` +
                        `Quedo atento a la confirmación.`;
        
        window.location.href = `https://wa.me/${phone}?text=${message}`;
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full px-4 py-8 md:py-12">
                <div className="max-w-[1100px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <section className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
                            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
                                <div className="w-full aspect-[4/3]">
                                    <ImageWithFallback src={property.image} alt={property.title} className="w-full h-full object-cover" fallbackText="Propiedad" />
                                </div>
                                <div className="p-6">
                                    <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
                                    <div className="flex items-center gap-2 text-text-muted mb-6">
                                        <span className="material-symbols-outlined">location_on</span> {property.district}
                                    </div>
                                    <div className="border-t border-dashed pt-4 flex justify-between items-end">
                                        <span className="text-sm text-text-muted">Precio Mensual</span>
                                        <div className="flex items-baseline gap-1 text-primary"><span className="text-sm font-semibold">S/</span><span className="text-3xl font-bold">{property.price.toLocaleString()}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                                <div><p className="text-sm font-bold">Garantía LG Inmobiliaria</p><p className="text-xs text-text-muted">Tu reserva está asegurada y coordinada directamente.</p></div>
                            </div>
                        </section>

                        <section className="lg:col-span-7">
                            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 md:p-10">
                                <div className="mb-8"><h2 className="text-3xl font-bold mb-2">Finalizar solicitud</h2><p className="text-text-muted">Completa tus datos. Te contactaremos por WhatsApp.</p></div>
                                <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); handleWhatsAppSubmit(); }}>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">Nombre Completo</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-3.5 text-text-muted material-symbols-outlined">person</span>
                                            <input 
                                                className="w-full h-12 pl-12 rounded-lg bg-background-light dark:bg-[#0c1a13] border border-gray-200 dark:border-border-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                                                placeholder="Ej. Juan Pérez" 
                                                required
                                                value={formData.name}
                                                onChange={e => setFormData({...formData, name: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold">DNI</label>
                                            <input 
                                                className="h-12 px-4 rounded-lg bg-background-light dark:bg-[#0c1a13] border border-gray-200 dark:border-border-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                                                placeholder="00000000" 
                                                value={formData.dni}
                                                onChange={e => setFormData({...formData, dni: e.target.value})}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-semibold">Email</label>
                                            <input 
                                                className="h-12 px-4 rounded-lg bg-background-light dark:bg-[#0c1a13] border border-gray-200 dark:border-border-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                                                placeholder="juan@ejemplo.com" 
                                                value={formData.email}
                                                onChange={e => setFormData({...formData, email: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold">WhatsApp</label>
                                        <input 
                                            className="h-12 px-4 rounded-lg bg-background-light dark:bg-[#0c1a13] border border-gray-200 dark:border-border-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" 
                                            placeholder="999 999 999" 
                                            required
                                            value={formData.whatsapp}
                                            onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                                        />
                                    </div>
                                    <button type="submit" className="w-full h-14 bg-primary text-[#111814] text-lg font-bold rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors">
                                        <span className="material-symbols-outlined">chat_bubble</span> Enviar por WhatsApp
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};