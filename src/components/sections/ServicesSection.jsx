import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <div className="flex justify-center items-center">
          <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
      ),
      title: 'Cuidados Domiciliares',
      description: 'Atendimento completo no conforto do seu lar, incluindo cuidados básicos de enfermagem, cuidados paliativos, controle de sinais vitais e acompanhamento geral do paciente.',
      features: ['Cuidados Paliativos','Curativos e Controle de sinais vitais', 'Troca de Sondas e Capacitação de Familiares'],
    },
    {
      icon: (
        <div className="flex justify-center items-center">
          <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </div>
      ),
      title: 'Administração de Medicamentos',
      description: 'Administração segura e pontual de medicamentos conforme prescrição médica, incluindo medicamentos orais, injetáveis e tópicos.',
      features: ['Medicamentos orais', 'Aplicação de injetáveis', 'Controle de horários'],
    },
    {
      icon: (
        <div className="flex justify-center items-center">
          <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      title: 'Laserterapia',
      description: 'Tratamento especializado com laser para cicatrização, alívio da dor e redução de inflamações.',
      features: ['Cicatrização de feridas', 'Alívio da dor', 'Redução de inflamações', 'Tratamento não invasivo'],
    },
    {
      icon: (
        <div className="flex justify-center items-center">
          <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      ),
      title: 'Acompanhamento Pós-operatório',
      description: 'Cuidados especializados no período de recuperação pós-cirúrgica, monitoramento e suporte durante a reabilitação.',
      features: ['Cuidados com curativos', 'Monitoramento da recuperação', 'Orientações pós-cirúrgicas', 'Suporte na reabilitação'],
    },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5517997194961', '_blank');
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Serviços Oferecidos
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ofereço uma gama completa de serviços de enfermagem domiciliar, 
            sempre com foco na qualidade, segurança e atendimento humanizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="mb-6" aria-hidden="true">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                <div>
                  <p className="text-sm font-semibold text-primary mb-3">
                    Inclui:
                  </p>
                  <ul className="space-y-2" role="list">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-gray-600"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 