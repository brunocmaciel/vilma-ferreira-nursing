import React from 'react';

const AboutSection = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Experiência Profissional',
      description: 'Longa experiência em atendimento domiciliar e cuidados paliativos',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      title: 'Especialização',
      description: 'Especialista em Laserterapia com formação continuada',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Atendimento Humanizado',
      description: 'Cuidado empático e personalizado para cada paciente',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Cuidado Integral',
      description: 'Abordagem holística focada no bem-estar completo',
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Sobre mim
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Enfermeira dedicada com vasta experiência em atendimento domiciliar, 
            especializada em proporcionar cuidados de qualidade no conforto e 
            segurança do lar. Minha missão é oferecer um atendimento humanizado, 
            respeitoso e profissional, sempre priorizando o bem-estar e a dignidade 
            de cada paciente.
          </p>

          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Com formação especializada em Laserterapia e ampla experiência em 
            cuidados paliativos, busco sempre a excelência no atendimento, 
            combinando conhecimento técnico com sensibilidade humana para 
            proporcionar o melhor cuidado possível.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 