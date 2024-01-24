import { Link } from "react-router-dom"
import { Header, Main, Container, ContainerText, Buttons, Footer } from "./style";
import Foto from "../../styles/img/eu.jpeg"
import GitHub from "../../styles/img/github.svg"
import Instagram from "../../styles/img/instagram-port.svg"
import Linkedin from "../../styles/img/linkedin.svg"

import Typewriter from "typewriter-effect";

function DashboardPage() {

  return (
    <>
      <Header>
        <h2>Diana Caroline</h2>
        <ul>
          <li><Link to={"/projetos"}>Projetos</Link></li>
          <li><Link to={"/sobre"}>Sobre mim</Link></li>
          <li><Link to={"/contato"}>Contato</Link></li>
        </ul>
      </Header>
      <Main>
        <Container>
          <h2>Bem vindos!</h2>
          <ContainerText>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString("Olá, meu nome é Diana! :)")
                  .changeDeleteSpeed(500)
                  .pauseFor(100)
                  .deleteAll()
                  .typeString("Sou apaixonada por tecnologia e programação web!")
                  .typeString("<br/>Tenho conhecimentos Web Full Stack, mas confesso que minha paixão é Front-end!")
                  .typeString("<br/>Entre em contato comigo e/ou conheça mais dos meus projetos. ;)")
                  .start();
              }}
            />
          </ContainerText>
          <Buttons>
            <h2><Link to={"/contato"}>Fale comigo</Link></h2>
            <p><Link to={"/projetos"}>Projetos</Link></p>
          </Buttons>
        </Container>
        <img src={Foto} alt="Foto de perfil" />
      </Main>
      <Footer>
        <li><a href="https://www.linkedin.com/in/diana-caroline-317a91236/" target="blank"><img src={Linkedin} alt="ícone do linkedin" /></a></li>
        <li><a href="https://github.com/DianaCarolineCV" target="blank"><img src={GitHub} alt="ícone do github" /></a></li>
        <li><a href="https://www.instagram.com/diana_carolinecq/" target="blank"><img src={Instagram} alt="ícone do instagram" /></a></li>
        <li><span>-----</span></li>
        <li>Me siga</li>
      </Footer>
    </>
  );
}



export default DashboardPage