import React, { useState } from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
}

export const ImageWithFallback: React.FC<Props> = ({ src, alt, fallbackText, className, ...props }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 ${className}`}>
        <div className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-4xl">image_not_supported</span>
            {fallbackText && <span className="text-xs font-medium uppercase tracking-wider">{fallbackText}</span>}
        </div>
      </div>
    );
  }

  return (
    <img 
        src={src} 
        alt={alt} 
        onError={() => setError(true)}
        className={className}
        {...props}
    />
  );
};