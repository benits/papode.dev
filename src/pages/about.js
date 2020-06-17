import React from "react"

import Layout from "../components/Layout"
import SocialLinks from "../components/SocialLinks"

import SEO from "../components/seo"

import { MainContent } from "../styles/base"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
      slugPath="about"
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Matheus de Amorim Benites, nasci em Dourados/MS, sou pai da
        Manuella. apaixonado por inovação e tecnologia, quanto maior o Desafio
        maior é minha vontade de participar =D, tenho experiência com
        desenvolvimento Web e Mobile.
      </p>
      <p>
        Atualmente sou Engenheiro de Software na{" "}
        <a
          href="http://easycarros.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Easy Carros
        </a>
      </p>

      <p></p>

      <p>
        Eu amo trabalhar em equipe, sou bem comunicativo, sou movido a desafios,
        pró ativo e hands on. No meu tempo livre, gosto de aprender coisas novas
        e ensinar para meus amigos sobre alguma coisa que aprendi, acho que por
        isso nasceu esse blog.
      </p>

      <h2>Habilidades</h2>

      <ul>
        <li>HTML e Template Languages</li>
        <li>Design Responsivo (Mobile First)</li>
        <li>CSS (Stylus)</li>
        <li>Css Frameworks (Bootstrap)</li>
        <li>Javascript (Design Patterns, Testes, ES6/7)</li>
        <li>ReactJS / Hooks </li>
        <li>React Native</li>
        <li>Styled Components</li>
        <li>NodeJS</li>
        <li>.Net Core</li>
        <li>Automatizadores (Webpack)</li>
        <li>Git</li>
        <li>MySQL - MongoDB - SQLServer</li>
        <li>Scrum and Kanban</li>
        <li>TDD e Continuous Integration</li>
        <li>O que eu não sei, aprendo rápido =)</li>
      </ul>

      <p>
        Pode ler um pouco mais sobre a minha trajetoria nesse link{" "}
        <AniLink
          cover
          direction="center"
          duration={0.6}
          bg="var(--background)"
          activeClassName="active"
          to="/minha-retrospectiva-2019"
          title="Minha retrospectiva"
        >
          Minha retrospectiva
        </AniLink>
      </p>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais. Me segue Lá :)
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
