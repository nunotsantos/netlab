import PropTypes from 'prop-types';
import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

class Main extends React.Component {
  constructor(props) {
    super(props);

    // Refs individuais para cada artigo
    this.articleRefs = {
      intro: React.createRef(),
      services: React.createRef(),
      work: React.createRef(),
      process: React.createRef(),
      about: React.createRef(),
      contact: React.createRef()
    };

    // Conteúdo em ambos os idiomas - VERSÃO SIMPLIFICADA PARA DEBUG
    this.content = {
      PT: {
        intro: {
          title: "áreas de atuação",
          content: <>
            <h3>Design & Identidade Visual</h3>
            <p>A NetLab oferece um portfólio abrangente de soluções digitais profissionais, cobrindo todas as necessidades de presença digital para empresas de todos os tamanhos. Especializamo-nos na criação de identidade visual completa, incluindo logótipos profissionais e material gráfico corporativo que reflecte a essência de cada marca.</p>
            <h3>Desenvolvimento Web</h3>
            <p>No desenvolvimento web, criamos desde websites institucionais e corporativos até lojas online completas (e-commerce) e marketplaces, assim como blogs, portais de conteúdo e landing pages optimizadas para conversão. Desenvolvemos ainda WebApps e aplicações progressivas (PWA) que oferecem experiências semelhantes a aplicações nativas.</p>
            <h3>Plataformas Tecnológicas</h3>
            <p>Trabalhamos com as mais modernas plataformas tecnológicas, incluindo WordPress para sites e lojas de gestão simplificada, Next.js e React para aplicações modernas e de alto desempenho, PHP personalizado para soluções sob medida e gestão especializada de bases de dados.</p>
            <h3>Experiência Digital</h3>
            <p>A nossa abordagem inclui sempre um forte foco na experiência digital, com design de interface atrativo e intuitivo (UI), optimização da experiência do utilizador (UX) através de prototipagem e testes de usabilidade rigorosos.</p>
            <h3>Marketing Digital</h3>
            <p>No âmbito do marketing digital, implementamos estratégias completas de optimização para motores de busca (SEO), integração perfeita com redes sociais, sistemas de email marketing e newsletters personalizadas, além de analytics e relatórios detalhados de performance.</p>
            <h3>Manutenção & Suporte</h3>
            <p>A nossa abordagem inclui sempre um forte foco na experiência digital, com design de interface atrativo e intuitivo (UI), optimização da experiência do utilizador (UX) através de prototipagem e testes de usabilidade rigorosos.</p>
            <h3>Consultoria Digital</h3>
            <p>No âmbito do marketing digital, implementamos estratégias completas de optimização para motores de busca (SEO), integração perfeita com redes sociais, sistemas de email marketing e newsletters personalizadas, além de analytics e relatórios detalhados de performance.</p>
            <p>Oferecemos serviços completos de manutenção e suporte, incluindo alojamento web profissional, gestão de domínios, actualizações de segurança regulares, backups automáticos e monitorização contínua, garantindo o perfeito funcionamento de todas as soluções implementadas.</p>
            <p>Como valor adicional, proporcionamos serviços de consultoria digital especializada, desenvolvendo estratégias de presença digital personalizadas, análise de concorrência e mercado, planos de transformação digital adaptados a cada negócio e optimização de conversões para maximizar o retorno do investimento.</p>
            <p>A NetLab distingue-se pelo desenvolvimento de soluções personalizadas, utilização de tecnologias actualizadas, foco em resultados mensuráveis e acompanhamento integral de todos os projectos, desde a concepção até à implementação e além.</p>
          </>
        },
        services: {
          title: "Portfólio",
          content: <>
            <p>Conheça alguns dos nossos projetos mais recentes. Cada trabalho foi desenvolvido com atenção aos detalhes e foco nos objetivos específicos de cada cliente.</p>
            
            <h3>Websites Realizados</h3>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <h4>Restaurante Maré Alta</h4>
                <p>Website responsivo com sistema de reservas online, galeria de imagens e menu digital.</p>
              </div>
              <div className="portfolio-item">
                <h4>Clínica Bem-Estar</h4>
                <p>Site institucional com agendamento de consultas, área de pacientes e blog de saúde.</p>
              </div>
              <div className="portfolio-item">
                <h4>Moda Sustentável</h4>
                <p>E-commerce completo com integração de pagamentos, gestão de stock e área de clientes.</p>
              </div>
            </div>
            
            <h3>Logotipos Criados</h3>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <h4>TechStart</h4>
                <p>Identidade visual moderna para startup de tecnologia, reflectindo inovação e confiança.</p>
              </div>
              <div className="portfolio-item">
                <h4>NaturalFit</h4>
                <p>Logo orgânico e vibrante para marca de produtos naturais e suplementos alimentares.</p>
              </div>
              <div className="portfolio-item">
                <h4>Espaço Criativo</h4>
                <p>Identidade minimalista para estúdio de design, transmitindo criatividade e profissionalismo.</p>
              </div>
            </div>
            
            <p>Interessado em ver mais exemplos? <a href="#" onClick={(e) => { e.preventDefault(); this.handleOpenArticle('contact'); }}>Entre em contacto</a> para conhecer outros projetos e referências.</p>
          </>
        },
        work: {
          title: "dna netlab",
          content: <>
            <p>Especializamo-nos na criação de websites e logótipos profissionais concebidos para impulsionar o crescimento do seu negócio. Combinamos um design criterioso, funcionalidade excecional e identidade visual distintiva para desenvolver soluções eficazes e orientadas para resultados.</p>
            <p>Com mais de 10 anos de experiência e mais de 200 projetos concluídos, possuímos o conhecimento e a competência necessários para elevar significativamente a sua presença digital. Cada projeto beneficia de uma abordagem personalizada, assegurando que traduz fielmente a essência e os objetivos da sua marca.</p>
            <p>Descubra os nossos serviços e perceba como podemos destacar o seu negócio no mundo digital. Consulte o nosso portfólio ou contacte-nos para uma consultoria gratuita e sem compromisso.</p>
            <br /><br /><br /><br /><br />ISTO É OUTRA CENA!!!! ARRANJAR<br /><p>Fundada em 2008, a NetLab nasceu da paixão por criar soluções digitais que fazem a diferença. Acreditamos que cada negócio merece uma presença online excecional, independentemente do seu tamanho ou orçamento.</p>
            
            <h3>Nossa Missão</h3>
            <p>Transformar ideias em experiências digitales memoráveis, combinando criatividade, tecnologia e estratégia para impulsionar o sucesso dos nossos clientes.</p>
            
            <h3>Nossa Visão</h3>
            <p>Ser referência em criação de websites e identidade visual, reconhecida pela qualidade, inovação e resultados tangíveis que oferecemos.</p>
            
            <h3>Nossa Equipa</h3>
            <p>Contamos com profissionais especializados em design, desenvolvimento, marketing digital e estratégia de negócio, todos comprometidos em entregar resultados excecionais e superar expectativas.</p>
            
            <h3>Porque nos escolher?</h3>
            <ul>
              <li>Design personalizado e único para cada cliente</li>
              <li>Suporte contínuo mesmo após o projeto concluído</li>
              <li>Compromisso com prazos e orçamentos combinados</li>
              <li>Conhecimento técnico atualizado nas últimas tendências</li>
              <li>Foco em resultados e retorno do investimento</li>
              <li>Transparência em todas as etapas do processo</li>
            </ul>
          </>
        },
        process: {
          title: "contactos",
          content: <>
            <p>Estamos prontos para transformar a sua ideia num projeto incrível. Entre em contacto connosco para uma consulta gratuita e sem compromisso.</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span><a href="mailto:info@netlab.com">info@netlab.com</a></span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+351 123 456 789</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Porto, Portugal</span>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <span>Seg-Sex: 9h-18h | Sáb: 10h-14h (por marcação)</span>
              </div>
            </div>
            
            <h3>Envie-nos uma mensagem</h3>
            <form method="post" action="#">
              <div className="field half first">
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" placeholder="Seu nome completo" required />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="seu@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="service">Serviço de Interesse</label>
                <select name="service" id="service">
                  <option value="">Seleccione uma opção</option>
                  <option value="website">Website</option>
                  <option value="logo">Logotipo</option>
                  <option value="both">Website e Logotipo</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Mensagem</label>
                <textarea name="message" id="message" rows="4" placeholder="Conte-nos sobre o seu projeto..." required></textarea>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Enviar Mensagem" className="special" /></li>
                <li><input type="reset" value="Limpar" /></li>
              </ul>
            </form>
            
            <div style={{marginTop: '40px', marginBottom: '20px'}}>
              <h3>Siga-nos nas redes sociais</h3>
              <p>Fique a par das nossas novidades e projetos mais recentes</p>
            </div>
            <ul className="icons" style={{marginTop: '25px'}}>
              <li><a href="http://www.facebook.com" className="icon" target="_blank"><FaFacebookF style={{fontSize: '20px'}} /></a></li>
              <li><a href="#" className="icon" target="_blank"><FaInstagram style={{fontSize: '20px'}} /></a></li>
              <li><a href="#" className="icon" target="_blank"><FaTwitter style={{fontSize: '20px'}} /></a></li>
              <li><a href="#" className="icon" target="_blank"><FaLinkedin style={{fontSize: '20px'}} /></a></li>
            </ul>
          </>
        },
        about: {
          title: "Sobre Nós",
          content: <>
            <p>Fundada em 2008, a NetLab nasceu da paixão por criar soluções digitais que fazem a diferença. Acreditamos que cada negócio merece uma presença online excecional, independentemente do seu tamanho ou orçamento.</p>
            
            <h3>Nossa Missão</h3>
            <p>Transformar ideias em experiências digitales memoráveis, combinando criatividade, tecnologia e estratégia para impulsionar o sucesso dos nossos clientes.</p>
            
            <h3>Nossa Visão</h3>
            <p>Ser referência em criação de websites e identidade visual, reconhecida pela qualidade, inovação e resultados tangíveis que oferecemos.</p>
            
            <h3>Nossa Equipa</h3>
            <p>Contamos com profissionais especializados em design, desenvolvimento, marketing digital e estratégia de negócio, todos comprometidos em entregar resultados excecionais e superar expectativas.</p>
            
            <h3>Porque nos escolher?</h3>
            <ul>
              <li>Design personalizado e único para cada cliente</li>
              <li>Suporte contínuo mesmo após o projeto concluído</li>
              <li>Compromisso com prazos e orçamentos combinados</li>
              <li>Conhecimento técnico atualizado nas últimas tendências</li>
              <li>Foco em resultados e retorno do investimento</li>
              <li>Transparência em todas as etapas do processo</li>
            </ul>
          </>
        },
        contact: {
          title: "Contacto",
          content: <>
          </>
        }
      },
      EN: {
        intro: {
          title: "Welcome to WebCriativo",
          content: <>
            <p>We are specialists in <strong>website creation</strong> and <strong>logo design</strong> that boost your business. We combine professional design, exceptional functionality and unique visual identity to create solutions that really work.</p>
            <p>With over 5 years of experience and more than 200 completed projects, we have the knowledge and expertise to elevate your digital presence. Each project is treated with personalized attention, ensuring it perfectly reflects the essence of your business.</p>
            <p>Explore our services and see how we can help your business shine online. <a href="#" onClick={(e) => { e.preventDefault(); this.handleOpenArticle('work'); }}>View our portfolio</a> or <a href="#" onClick={(e) => { e.preventDefault(); this.handleOpenArticle('contact'); }}>contact us</a> for a free consultation.</p>
          </>
        },
        services: {
          title: "Our Services",
          content: <>
            <h3>Professional Website Creation</h3>
            <p>We develop modern, responsive websites optimized for search engines:</p>
            <ul>
              <li>Institutional and corporate websites</li>
              <li>Online stores (e-commerce) with shopping cart</li>
              <li>Blogs and content portals</li>
              <li>Landing pages for specific campaigns</li>
              <li>Responsive websites (mobile-first)</li>
              <li>Basic SEO optimization</li>
              <li>Social media integration</li>
              <li>Contact forms and newsletter systems</li>
              <li>Maintenance and ongoing technical support</li>
            </ul>
            
            <h3>Logo Design and Visual Identity</h3>
            <p>We create unique and memorable visual identities:</p>
            <ul>
              <li>Detailed initial briefing to understand your vision</li>
              <li>Market research and strategic conception</li>
              <li>3-5 initial concept proposals</li>
              <li>Unlimited revisions until perfect</li>
              <li>Delivery in multiple formats (PNG, JPG, SVG, PDF)</li>
              <li>Brand manual with usage guidelines</li>
              <li>Business card and coordinated stationery (optional)</li>
            </ul>
            
            <h3>Complete Packages</h3>
            <p>We offer complete solutions for your business:</p>
            <ul>
              <li><strong>Startup Package:</strong> Website + Logo + 1 month support</li>
              <li><strong>Business Package:</strong> Website + Logo + Social Media + Basic SEO</li>
              <li><strong>Premium Package:</strong> Complete solution including initial digital marketing</li>
            </ul>
            
            <p><a href="#" onClick={(e) => { e.preventDefault(); this.handleOpenArticle('contact'); }}>Request a personalized quote</a> according to your specific needs.</p>
          </>
        },
        work: {
          title: "Portfolio",
          content: <>
            <p>Discover some of our most recent projects. Each work was developed with attention to detail and focus on the specific objectives of each client.</p>
            
            <h3>Websites Created</h3>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <h4>Maré Alta Restaurant</h4>
                <p>Responsive website with online booking system, image gallery and digital menu.</p>
              </div>
              <div className="portfolio-item">
                <h4>Bem-Estar Clinic</h4>
                <p>Institutional website with appointment scheduling, patient area and health blog.</p>
              </div>
              <div className="portfolio-item">
                <h4>Sustainable Fashion</h4>
                <p>Complete e-commerce with payment integration, stock management and customer area.</p>
              </div>
            </div>
            
            <h3>Logos Created</h3>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <h4>TechStart</h4>
                <p>Modern visual identity for technology startup, reflecting innovation and trust.</p>
              </div>
              <div className="portfolio-item">
                <h4>NaturalFit</h4>
                <p>Organic and vibrant logo for natural products and supplements brand.</p>
              </div>
              <div className="portfolio-item">
                <h4>Creative Space</h4>
                <p>Minimalist identity for design studio, conveying creativity and professionalism.</p>
              </div>
            </div>
            
            <p>Interested in seeing more examples? <a href="#" onClick={(e) => { e.preventDefault(); this.handleOpenArticle('contact'); }}>Contact us</a> to learn about other projects and references.</p>
          </>
        },
        process: {
          title: "Our Process",
          content: <>
            <p>Our process was developed to ensure exceptional results with minimal complications for you:</p>
            
            <div className="process-step">
              <h4>1. Initial Contact and Briefing</h4>
              <p>We talk to understand your needs, goals and expectations. This phase includes a detailed questionnaire to capture the essence of your project.</p>
            </div>
            
            <div className="process-step">
              <h4>2. Proposal and Budget</h4>
              <p>We prepare a detailed proposal with scope, deadlines and investment. We adjust as needed until we reach the ideal solution for your business.</p>
            </div>
            
            <div className="process-step">
              <h4>3. Design and Development</h4>
              <p>We create the design, develop the solution and keep you involved at every stage with regular feedback opportunities.</p>
            </div>
            
            <div className="process-step">
              <h4>4. Review and Adjustments</h4>
              <p>We present the work and implement the necessary adjustments until everything is exactly as you imagined.</p>
            </div>
            
            <div className="process-step">
              <h4>5. Delivery and Launch</h4>
              <p>We finalize all details, perform rigorous tests and launch your project. We also provide training on how to manage your new site.</p>
            </div>
            
            <div className="process-step">
              <h4>6. Post-delivery Support</h4>
              <p>We offer technical support after launch to ensure everything works perfectly and to help with any questions.</p>
            </div>
            
            <h3>Delivery Times</h3>
            <p>Development time varies according to project complexity:</p>
            <ul>
              <li>Logos: 1-2 weeks</li>
              <li>Basic websites: 2-3 weeks</li>
              <li>E-commerce: 3-5 weeks</li>
              <li>Complex projects: 4-8 weeks</li>
            </ul>
          </>
        },
        about: {
          title: "About Us",
          content: <>
            <p>Founded in 2018, WebCriativo was born from the passion to create digital solutions that make a difference. We believe that every business deserves an exceptional online presence, regardless of its size or budget.</p>
            
            <h3>Our Mission</h3>
            <p>Transform ideas into memorable digital experiences, combining creativity, technology and strategy to drive our clients' success.</p>
            
            <h3>Our Vision</h3>
            <p>To be a reference in website creation and visual identity, recognized for the quality, innovation and tangible results we offer.</p>
            
            <h3>Our Team</h3>
            <p>We have professionals specialized in design, development, digital marketing and business strategy, all committed to delivering exceptional results and exceeding expectations.</p>
            
            <h3>Why choose us?</h3>
            <ul>
              <li>Personalized and unique design for each client</li>
              <li>Continuous support even after project completion</li>
              <li>Commitment to agreed deadlines and budgets</li>
              <li>Technical knowledge updated with the latest trends</li>
              <li>Focus on results and return on investment</li>
              <li>Transparency at all stages of the process</li>
            </ul>
          </>
        },
        contact: {
          title: "Contact",
          content: <>
            <p>We are ready to transform your idea into an incredible project. Contact us for a free, no-obligation consultation.</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span><a href="mailto:info@webcriativo.com">info@webcriativo.com</a></span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+351 123 456 789</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Porto, Portugal</span>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <span>Mon-Fri: 9am-6pm | Sat: 10am-2pm (by appointment)</span>
              </div>
            </div>
            
            <h3>Send us a message</h3>
            <form method="post" action="#">
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your full name" required />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="your@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="service">Service of Interest</label>
                <select name="service" id="service">
                  <option value="">Select an option</option>
                  <option value="website">Website</option>
                  <option value="logo">Logo</option>
                  <option value="both">Website and Logo</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" placeholder="Tell us about your project..." required></textarea>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="special" /></li>
                <li><input type="reset" value="Clear" /></li>
              </ul>
            </form>
            
            <div style={{marginTop: '40px', marginBottom: '20px'}}>
              <h3>Follow us on social media</h3>
              <p>Stay updated with our latest news and projects</p>
            </div>
            
            <ul className="icons" style={{marginTop: '25px'}}>
              <li><a href="#" className="icon"><FaFacebookF style={{fontSize: '20px'}} /></a></li>
              <li><a href="#" className="icon"><FaInstagram style={{fontSize: '20px'}} /></a></li>
              <li><a href="#" className="icon"><FaTwitter style={{fontSize: '20px'}} /></a></li>
              <li><a href="#" className="icon"><FaLinkedin style={{fontSize: '20px'}} /></a></li>
            </ul>
          </>
        }
      }
    };
  }


  componentDidMount() {
    // Adicionar event listener para clique fora
    this.clickListener = (e) => this.handleClickOutside(e);
    this.escapeListener = (e) => this.handleEscapeKey(e);
    
    document.addEventListener('mousedown', this.clickListener);
    document.addEventListener('keydown', this.escapeListener);
  }

  componentWillUnmount() {
    // Remover event listeners
    document.removeEventListener('mousedown', this.clickListener);
    document.removeEventListener('keydown', this.escapeListener);
  }

  handleClickOutside = (event) => {
    // Só processar se tiver um artigo aberto e função de fechar
    if (this.props.article && this.props.onCloseArticle) {
      const currentArticleRef = this.articleRefs[this.props.article];
      
      // Verificar se é clique no botão fechar
      const isCloseButton = event.target.closest('.close') !== null;
      
      // Verificar se é clique fora do artigo
      const isOutsideArticle = currentArticleRef.current && 
                              !currentArticleRef.current.contains(event.target);
      
      // Fechar se for botão fechar OU clique fora do artigo
      if (isCloseButton || isOutsideArticle) {
        // Prevenir comportamento padrão e propagação
        event.preventDefault();
        event.stopPropagation();
        this.props.onCloseArticle();
      }
    }
  }

  handleEscapeKey = (event) => {
    if (event.key === 'Escape' && this.props.article && this.props.onCloseArticle) {
      this.props.onCloseArticle();
    }
  }

  handleOpenArticle = (article) => {
    if (this.props.onOpenArticle) {
      this.props.onOpenArticle(article);
    }
  }

  renderArticle = (id, title, content, bgColor) => {
    const isActive = this.props.article === id;
    const currentLanguage = this.props.language || 'PT';
    
    return (
      <article
        id={id}
        ref={this.articleRefs[id]}
        className={`${isActive ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
        style={{ 
          display: isActive ? 'block' : 'none',
          position: 'relative',
          zIndex: isActive ? 10001 : 'auto'
        }}
      >
        <h2 className="major">{title}</h2>
        {content}

      {/* === BOTÃO DE FECHAR COM SEU SVG === */}
      <div 
        onClick={(e) => {
          e.stopPropagation();
          this.props.onCloseArticle();
        }}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          zIndex: 10002,
          backgroundImage: 'url("/images/fechar.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transition: 'transform 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.opacity = '0.8';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.opacity = '1';
        }}
      />
    </article>
  );
}

  render() {
    const currentLanguage = this.props.language || 'PT';
    const currentContent = this.content[currentLanguage];

    return (
      <div 
        id="main" 
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        {this.renderArticle('intro', currentContent.intro.title, currentContent.intro.content, '#3498db')}
        {this.renderArticle('services', currentContent.services.title, currentContent.services.content, '#3498db')}
        {this.renderArticle('work', currentContent.work.title, currentContent.work.content, '#2ecc71')}
        {this.renderArticle('process', currentContent.process.title, currentContent.process.content, '#9b59b6')}
        {this.renderArticle('about', currentContent.about.title, currentContent.about.content, '#e74c3c')}
        {this.renderArticle('contact', currentContent.contact.title, currentContent.contact.content, '#f39c12')}

        {/* Overlay para clicks fora */}
        {this.props.article && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 10000,
              display: this.props.article ? 'block' : 'none'
            }}
            onClick={this.handleClickOutside}
          />
        )}
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  onOpenArticle: PropTypes.func,
  language: PropTypes.string
};

export default Main;