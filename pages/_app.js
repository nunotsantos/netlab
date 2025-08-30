import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/main.scss';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Função para remover APENAS a linha vertical problemática
    const removeSpecificVerticalLine = () => {
      console.log('Procurando linha vertical específica...');
      
      // 1. Solução precisa: target apenas elementos no canto superior direito
      const preciseStyle = document.createElement('style');
      preciseStyle.textContent = `
        /* Remover apenas elementos muito específicos no canto superior direito */
        /* Pseudo-elementos no topo direito */
        body > div:last-child::after,
        html > body:last-child::after,
        #__next > div:last-child::after {
          display: none !important;
          content: none !important;
        }
        
        /* Elementos com posição fixed no topo direito (específicos para a linha) */
        div[style*="right: 20px"]::before,
        div[style*="right:20px"]::before {
          display: none !important;
          content: none !important;
        }
        
        /* Elementos muito específicos que podem ser a linha */
        #header::after {
          right: 70px !important;
          display: none !important;
          content: none !important;
        }
      `;
      document.head.appendChild(preciseStyle);
      
      // 2. Remoção seletiva de elementos - apenas os que estão claramente no caminho do botão
      setTimeout(() => {
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const style = window.getComputedStyle(el);
          
          // Critérios MUITO específicos para a linha problemática
          const isProblematicLine = (
            rect.width <= 2 && 
            rect.height > 50 && 
            rect.right > window.innerWidth - 70 && // Muito perto da borda direita
            rect.top < 50 && // Muito perto do topo
            rect.left > window.innerWidth - 5 // Está na borda direita
          );
          
          if (isProblematicLine) {
            console.log('Removendo linha problemática:', el);
            el.style.display = 'none'; // Apenas esconder, não remover completamente
          }
        });
      }, 200);
    };

    removeSpecificVerticalLine();
    
    // Reaplicar quando a janela for redimensionada
    window.addEventListener('resize', removeSpecificVerticalLine);
    
    return () => {
      window.removeEventListener('resize', removeSpecificVerticalLine);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="change app description" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500&family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;