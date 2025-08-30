import PropTypes from 'prop-types';

const Footer = (props) => {
  const { timeout, language } = props;

  // Conteúdo traduzido para o footer
  const footerTexts = {
    PT: `Copyright &copy; ${new Date().getFullYear()} | NetLab<br />Todos os direitos reservados`,
    EN: `Copyright &copy; ${new Date().getFullYear()} | NetLab<br />All rights reserved`
  };

  const footerText = footerTexts[language] || footerTexts.PT;

  return (
    <footer id="footer" style={timeout ? {display: 'none'} : {}}>
      <p className="copyright" dangerouslySetInnerHTML={{ __html: footerText }} />
    </footer>
  );
};

Footer.propTypes = {
  timeout: PropTypes.bool,
  language: PropTypes.string
};

Footer.defaultProps = {
  language: 'PT'
};

export default Footer;