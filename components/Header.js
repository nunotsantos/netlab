import PropTypes from 'prop-types';
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";

const Header = (props) => {
  const { language, onOpenArticle, timeout, onLanguageChange } = props;

  // Conteúdo traduzido
  const translations = {
    PT: {
      title: "NetLab",
      subtitle: "soluções profissionais que elevam a presença da<br />sua marca e conectam o seu negócio ao futuro digital",
      navItems: ["áreas de atuação", "portfólio", "dna netlab", "contactos"]
    },
    EN: {
      title: "NetLab", 
      subtitle: "professional solutions that elevate your brand's<br />presence and connect your business to the digital future",
      navItems: ["Home", "Services", "Portfolio", "Process", "About", "Contact"]
    }
  };

  const current = translations[language] || translations.PT;
  const articleIds = ['intro', 'services', 'work', 'process', 'about', 'contact'];

  return (
    <header id="header" style={timeout ? {display: 'none'} : {}}>
      <div className="logo">
        <Image 
          src="/logo.png"
          alt={"NetLab logo"}
          width={65}
          height={100}
          priority
          className="logo-image"
        />
      </div>
      <div className="content">
        <div className="inner">
          <h1>{current.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: current.subtitle }} />
        </div>
      </div>
      <nav>
        <ul>
          {current.navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="javascript:;" 
                onClick={() => onOpenArticle(articleIds[index])}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageSelector onLanguageChange={onLanguageChange} language={language} />
      
      {/* Estilos combinados */}
      <style jsx>{`
        /* Remover pseudo-elementos */
        #header::before,
        #header::after {
          display: none !important;
          content: none !important;
        }
        
        body::after,
        html::after,
        #__next::after,
        #wrapper::after {
          right: auto !important;
          content: none !important;
        }
        
        .language-selector::before,
        .language-selector::after,
        [class*="language"]::before,
        [class*="language"]::after {
          display: none !important;
          content: none !important;
        }
        
        /* Estilos para o logo */
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: var(--accent-color);
          margin: 0 0 0rem 0px;
          border: 2px solid #fff;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          position: relative;
        }
        
        .logo-image {
          position: relative;
          top: 0px; /* Ajuste este valor para descer mais ou menos */
          object-fit: contain;
        }
      `}</style>
    </header>
  );
};

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  onLanguageChange: PropTypes.func,
  timeout: PropTypes.bool,
  language: PropTypes.string
};

Header.defaultProps = {
  language: 'PT'
};

export default Header;