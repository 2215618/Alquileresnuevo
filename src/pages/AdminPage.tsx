import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';

export const AdminPage: React.FC = () => {
    const navigate = useNavigate();
    const [localProperties, setLocalProperties] = useState(properties);
    
    // Simple state for adding new property (mock)
    const [newCode, setNewCode] = useState(`P0${localProperties.length + 1}`);

    const handleExport = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localProperties, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "properties_export.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#f3f4f6]">
            <aside className="w-64 flex-shrink-0 bg-sidebar-bg flex flex-col h-full text-white shadow-xl z-20">
                <div onClick={() => navigate('/')} className="p-6 flex items-center gap-3 cursor-pointer">
                    <div className="bg-primary/20 p-2 rounded-lg"><span className="material-symbols-outlined text-primary text-2xl">apartment</span></div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold">LG Admin</h1>
                        <span className="text-[10px] text-gray-400">PANEL DE GESTIÓN</span>
                    </div>
                </div>
                <nav className="flex-1 px-4 py-4 space-y-1">
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors"><span className="material-symbols-outlined">dashboard</span>Dashboard</Link>
                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-800 text-white rounded-lg border-l-4 border-primary"><span className="material-symbols-outlined text-primary">real_estate_agent</span>Propiedades</div>
                    <div className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 rounded-lg"><span className="material-symbols-outlined">analytics</span>Reportes</div>
                </nav>
                <div className="p-4 bg-gray-900/50 border-t border-gray-700 flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">CA</div>
                    <div className="flex flex-col text-xs"><p className="font-bold">Carlos Admin</p><p className="text-gray-400">carlos@lg.pe</p></div>
                </div>
            </aside>
            <main className="flex-1 flex flex-col min-w-0">
                <header className="h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link to="/" className="hover:text-primary">Propiedades</Link>
                        <span className="material-symbols-outlined text-base">chevron_right</span>
                        <span className="text-primary font-medium">Nueva Propiedad</span>
                    </div>
                    <div className="flex items-center gap-4 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-200">
                        <span className="material-symbols-outlined text-gray-400 text-sm">lock</span>
                        <span className="text-xs font-semibold text-gray-500">PIN VERIFICACIÓN</span>
                        <div className="flex gap-1">
                            <input className="w-6 h-8 text-center bg-white border rounded focus:outline-none focus:border-primary" defaultValue="9"/>
                            <input className="w-6 h-8 text-center bg-white border rounded focus:outline-none focus:border-primary" defaultValue="4"/>
                            <input className="w-6 h-8 text-center bg-white border rounded focus:outline-none focus:border-primary" />
                            <input className="w-6 h-8 text-center bg-white border rounded focus:outline-none focus:border-primary" />
                        </div>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-3xl font-black text-gray-900">Agregar Propiedad</h2>
                        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                            <div className="bg-gray-50 px-6 py-4 flex justify-between border-b"><h3 className="font-bold">Información Básica</h3><span className="text-xs font-bold text-green-600 bg-green-50 px-2 rounded">ACTIVO</span></div>
                            <div className="p-6 grid grid-cols-12 gap-6">
                                <div className="col-span-4"><label className="block text-xs font-bold mb-1 uppercase text-gray-500">Código</label><input className="w-full p-2.5 border rounded-lg focus:ring-1 focus:ring-primary focus:outline-none" value={newCode} onChange={(e) => setNewCode(e.target.value)} /></div>
                                <div className="col-span-8"><label className="block text-xs font-bold mb-1 uppercase text-gray-500">Distrito</label><select className="w-full p-2.5 border rounded-lg focus:ring-1 focus:ring-primary focus:outline-none"><option>Iquitos</option><option>Punchana</option></select></div>
                                <div className="col-span-6"><label className="block text-xs font-bold mb-1 uppercase text-gray-500">Precio (S/)</label><input type="number" className="w-full p-2.5 border rounded-lg focus:ring-1 focus:ring-primary focus:outline-none" placeholder="0.00" /></div>
                                <div className="col-span-6"><label className="block text-xs font-bold mb-1 uppercase text-gray-500">Área (m2)</label><input type="number" className="w-full p-2.5 border rounded-lg focus:ring-1 focus:ring-primary focus:outline-none" /></div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border p-6">
                            <h3 className="font-bold mb-4 flex items-center gap-2"><span className="material-symbols-outlined text-primary">imagesmode</span> Galería</h3>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="aspect-square border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-primary hover:text-primary cursor-pointer transition-colors"><span className="material-symbols-outlined text-3xl">cloud_upload</span><span className="text-xs font-bold mt-2">Subir</span></div>
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
                                    <span className="material-symbols-outlined">image</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-4">Ruta local: /assets/properties/{newCode}/</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-t px-8 py-4 flex justify-between items-center shadow-lg">
                    <span className="text-sm text-gray-500">Inventario actual: {localProperties.length} propiedades</span>
                    <div className="flex gap-3">
                        <button className="px-6 py-2 border rounded-lg hover:bg-gray-50">Borrador</button>
                        <button onClick={handleExport} className="px-6 py-2 bg-primary text-text-main font-bold rounded-lg shadow-md hover:bg-primary-dark transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">download</span> Exportar JSON
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};