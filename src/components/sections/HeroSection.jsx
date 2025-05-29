import React from 'react';
import ProfileImage from '../ui/ProfileImage';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5517997194961', '_blank');
  };

  return (
    <section id="inicio" className="min-h-screen w-full bg-gradient-to-br from-primary/5 to-primary/10 py-20 px-4">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Vilma Ferreira
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6">
              Especialista em Laserterapia
            </h2>

            <p className="text-lg md:text-md text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              "Cuidado profissional e humanizado no conforto do seu lar"
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg bg-primary hover:bg-[#128C7E] text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale Comigo no WhatsApp
            </button>
          </div>

          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]">
              <ProfileImage
                src="/vilma-profile.jpg"
                alt="Vilma Ferreira - Enfermeira Home Care"
                name="Vilma Ferreira"
                title="Enfermeira Especializada"
                className="rounded-lg shadow-xl overflow-hidden"
                imgClassName="object-cover object-[center_20%] scale-110"
                height="h-[400px] md:h-[550px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 