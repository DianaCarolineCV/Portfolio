import { Link } from "react-router-dom"
import { Header, Main } from "./style";
import Voltar from "../../styles/img/voltar.png"


function AboutPage() {
    return (
        <>
            <Header>
                <div>
                    <p>Sobre mim</p>
                    <Link to={"/"}><img src={Voltar} alt="ícone do instagram" /></Link>
                </div>
                <hr />
            </Header>

            <Main>
                <div>
                    <h2>Um pouco sobre minha história</h2>
                    <p>
                        Olá, meu nome é Diana e tenho 24 anos. Sou formada em Fisioterapia e possuo uma pós-graduação em UTI. Atualmente, estou estudando Ciência da Computação. É interessante notar que trabalho em uma área totalmente diferente da minha formação inicial. <br />

                        Na verdade, nunca me identifiquei com a área da saúde e percebo que foi uma decisão que tomei quando ainda era jovem e impulsiva. À medida que trabalhava nesse campo, sentia-me extremamente frustrada e infeliz.<br />

                        Meu marido é programador e sempre me sentia intrigada pelo que ele fazia. Um dia, decidi pesquisar sobre essa área por conta própria e acabei me apaixonando. Passei dias, talvez semanas, estudando o assunto.<br />

                        Acredito na filosofia de trabalhar com aquilo que amamos, afinal, faremos isso pelo resto de nossas vidas. Por isso, decidi fazer uma transição de carreira, com o objetivo de trabalhar com front-end.<br />

                        Após pesquisar  decidi seguir o caminho de uma escola de programação com duração de um ano. Dediquei muitas horas para aprender conteúdos densos em pouco tempo, mas não encarei isso como um sacrifício, pois realmente adorei o processo.<br />

                        Em seguida, entrei no mercado de trabalho e ingressei em uma faculdade, onde continuo me aprimorando constantemente.

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
                        Ágil <span>--</span> Bom trabalho em equipe <span>--</span> Aprendizagem rápida
                    </h3>
                </div>
                <hr />

                <div>
                    <h2>Experiência</h2>
                    <h3>
                        Programadora Front-end <span>--</span> 8 meses(atual) <br />
                        Monitora de alunos em desenvolvimento front-end <span>--</span>  6 meses
                    </h3>
                </div>
            </Main>
        </>
    )

}

export default AboutPage;