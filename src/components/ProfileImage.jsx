import React, { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

const ProfileImage = ({
  src = 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
  alt = 'Vilma Ferreira - Enfermeira Home Care',
  width = 'w-full',
  height = 'h-[500px]',
  name = 'Vilma Ferreira',
  title = 'Enfermeira Especializada',
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    console.log('Erro ao carregar imagem:', src);
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    console.log('Imagem carregada com sucesso:', src);
    setImageLoading(false);
  };

  const showFallback = imageError || !src;

  return (
    <div className={`max-w-[400px] rounded-2xl shadow-2xl overflow-hidden relative ${width} ${height} ${showFallback ? 'bg-gradient-to-br from-primary to-primary-light' : 'bg-transparent'}`}>
      {!showFallback && (
        <>
          <img
            src={src}
            alt={alt}
            onError={handleImageError}
            onLoad={handleImageLoad}
            crossOrigin="anonymous"
            className={`w-full h-full object-cover ${imageLoading ? 'hidden' : 'block'}`}
          />
          
          {imageLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white">
              <p>Carregando imagem...</p>
            </div>
          )}

          {!imageLoading && !imageError && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center text-white">
              <p className="text-xs opacity-90"></p>
            </div>
          )}
        </>
      )}

      {showFallback && (
        <div className="w-full h-full flex flex-col items-center justify-center text-white relative">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
          <UserIcon className="w-24 h-24 md:w-32 md:h-32 mb-4 z-10" />
          <h4 className="text-xl md:text-2xl font-semibold text-center z-10 mb-2">
            {name}
          </h4>
          <p className="text-center z-10 opacity-90">
            {title}
          </p>
          <div className="absolute bottom-4 left-4 right-4 text-center z-10">
            <p className="text-xs opacity-80">
              Adicione a foto profissional em:
              <br />
              public/images/vilma-profile.jpg
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage; 