import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-[#f0f4f2] dark:border-border-dark px-4 md:px-10 py-3 transition-colors">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 text-text-main dark:text-white">
                <div className="size-8 flex items-center justify-center bg-primary/20 text-primary rounded-lg">
                    <span className="material-symbols-outlined text-xl">apartment</span>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">LG Agencia Inmobiliaria</h2>
            </Link>
            <div className="flex flex-1 justify-end gap-6 items-center">
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-200">Propiedades</Link>
                    <Link to="/admin" className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-200">Gestión</Link>
                </div>
                <button className="md:hidden text-text-main dark:text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <button onClick={() => navigate('/admin')} className="hidden md:flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-[#111814] text-sm font-bold shadow-sm hover:opacity-90 transition-opacity">
                    <span className="truncate">Iniciar Sesión</span>
                </button>
            </div>
        </div>
    </header>
  );
};