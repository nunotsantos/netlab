import Head from "next/head";
import Script from 'next/script';
import React from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import { Partytown } from '@builder.io/partytown/react';

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading",
            language: "PT"
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
        this.handleLanguageChange = this.handleLanguageChange.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: "" })
        }, 100)
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout
            })
        }, 350)
    }

handleCloseArticle() {
  // Fase 1: Iniciar animação de fechamento
  this.setState({
    articleTimeout: true,
    timeout: true
  });

  // Fase 2: Esconder o artigo após animação
  setTimeout(() => {
    this.setState({
      isArticleVisible: false,
      article: "",
      articleTimeout: false,
      timeout: false
    });
    
    // Scroll para topo
    window.scrollTo(0, 0);
    
    // Fase 3: Restaurar estilos corretamente (SEM quebrar layout)
    setTimeout(() => {
      // Apenas remover classes/styles problemáticos, não adicionar novos
      document.body.classList.remove('is-article-visible');
      
      // Remover quaisquer estilos inline que possam ter sido adicionados
      const wrapper = document.getElementById('wrapper');
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      
      if (wrapper) wrapper.removeAttribute('style');
      if (header) header.removeAttribute('style');
      if (footer) footer.removeAttribute('style');
      
    }, 50);
    
  }, 350);
}

    handleLanguageChange(newLanguage) {
        this.setState({ language: newLanguage });
    }

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? "is-article-visible" : ""}`}>
                <div>
                    <Head>
                        <title>NetLab</title>
                        <link rel="icon" href="/icon.png" />
                        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
                        <Partytown debug={true} forward={['dataLayer.push']} />
                    </Head>
                    <Script src="#" type="text/partytown" />
                    
                    <div id="wrapper">
                        <Header 
                            onOpenArticle={this.handleOpenArticle} 
                            onLanguageChange={this.handleLanguageChange} 
                            timeout={this.state.timeout}
                            language={this.state.language}  
                        />
                        <Main
                            isArticleVisible={this.state.isArticleVisible}
                            timeout={this.state.timeout}
                            articleTimeout={this.state.articleTimeout}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle}
                            onOpenArticle={this.handleOpenArticle}
                            language={this.state.language}
                        />
                        <Footer
                            timeout={this.state.timeout}
                            language={this.state.language} />
                    </div>

                    <div id="bg" />
                </div>
            </div>
        )
    }
}

export default IndexPage;