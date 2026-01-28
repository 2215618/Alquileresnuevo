import React from 'react';

export const Footer: React.FC = () => (
    <footer className="py-8 text-center text-text-muted dark:text-gray-600 text-sm border-t border-[#f0f4f2] dark:border-border-dark bg-white dark:bg-background-dark">
        <p>© 2024 LG Agencia Inmobiliaria. Iquitos, Perú.</p>
        <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:text-primary">Términos</a>
            <a href="#" className="hover:text-primary">Privacidad</a>
            <a href="#" className="hover:text-primary">Soporte</a>
        </div>
    </footer>
);