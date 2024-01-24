import { Link } from "react-router-dom"
import { Header, Main } from "./style";
import Voltar from "../../styles/img/voltar.png"


function AboutPage() {
    return (
        <>
            <Header>
                <div>
                    <p>Sobre mim</p>
                    <Link to={"/"}><img src={Voltar} alt="seta" /></Link>
                </div>
                <hr />
            </Header>

            <Main>
                <div>
                    <h2>Um pouco sobre minha história</h2>
                    <p>
                        Olá, meu nome é Diana, tenho 25 anos e sou formada em Fisioterapia, com uma pós-graduação em UTI. Atualmente, estou imersa no estudo de Ciência da Computação, uma escolha que marca uma transição significativa em minha trajetória profissional.<br />

                        Desde o início, nunca me senti plenamente conectada com a área da saúde, percebo hoje que essa decisão foi tomada em uma fase mais jovem e impulsiva da minha vida. À medida que me envolvia no campo da Fisioterapia, a sensação de frustração e infelicidade crescia.<br />

                        Meu marido, programador, sempre despertou minha curiosidade sobre sua profissão. Um dia, movida por essa curiosidade, decidi explorar o universo da programação por conta própria e me apaixonei por esse novo horizonte. Dediquei dias e semanas ao estudo do assunto, compreendendo que a verdadeira paixão reside em trabalhar com aquilo que amamos ao longo de nossas vidas.<br />

                        Essa convicção me impulsionou a realizar uma mudança de carreira com foco no desenvolvimento front-end. Após extensa pesquisa, escolhi trilhar o caminho de uma escola de programação com um programa de um ano de duração. O processo de absorver conteúdos densos em um curto período de tempo não foi encarado como um sacrifício, mas sim como uma jornada pela qual me encantei profundamente.<br />

                        Com a conclusão desse período de estudo, ingressei no mercado de trabalho e me matriculei em uma faculdade, onde continuo a aprimorar constantemente minhas habilidades. Acredito que essa mudança não apenas representa uma transformação profissional, mas também um passo em direção a uma carreira na qual encontro realização e paixão. Estou entusiasmada com o que o futuro reserva nesse novo capítulo da minha vida profissional.<br />

                    </p>
                </div>
                <hr />

                <div>
                    <h2>Hard Skills</h2>
                    <h3>
                        JavaScript (ES6+) <span>--</span> CSS3 <span>--</span> HTML5 <span>--</span>React <span>--</span> Hooks  <br />
                        TypeScript <span>--</span> Git <span>--</span> GitHub <span>--</span> Scrum <span>--</span> Trello <br />
                        Express <span>--</span> Banco de dados SQL <span>--</span> PostgreSQL <span>--</span> TypeORM <span>--</span> Migrations <br />
                        Node.js <span>--</span> Consumo de APIs <span>--</span> Python  <span>--</span> Django<br />
                        Django REST Framework <span>--</span> Programação orientada a objetos (POO)
                    </h3>
                </div>
                <hr />

                <div>
                    <h2>Soft Skills</h2>
                    <h3>
                        Comunicativa <span>--</span> Organizada <span>--</span> Proativa  <br />
                        Ágil <span>--</span> Boa trabalho em equipe <span>--</span> Aprendizagem rápida
                    </h3>
                </div>
                <hr />

                <div>
                    <h2>Experiência</h2>
                    <h3>
                        Programadora Front-end <span>--</span> 1 ano (atual)<br />
                        Monitora de alunos em desenvolvimento front-end <span>--</span>  6 meses
                    </h3>
                </div>
            </Main>
        </>
    )

}

export default AboutPage;