import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Checar se está sobre o footer
    const footer = document.querySelector('footer');
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      const buttonBottom = window.innerHeight - 80; // 80px é a posição do botão do fim da tela
      setIsOverFooter(footerTop <= buttonBottom);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-20 right-4 p-3 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none z-50 ${
            isOverFooter ? 'bg-gradient-to-br from-primary/5 to-primary/10' : 'bg-primary'
          }`}
          aria-label="Voltar ao topo"
        >
          <svg
            className={`w-6 h-6 ${isOverFooter ? 'stroke-primary' : 'stroke-white'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 