import { Header, Main } from "./style";
import { Link } from "react-router-dom"
import Voltar from "../../styles/img/voltar.png"

function ProjectPage() {
    return (
        <>
            <Header>
                <div>
                    <p>Projetos</p>
                    <Link to={"/"}><img src={Voltar} alt="seta" /></Link>
                </div>
                <hr />
            </Header>
            <Main>
                <div>
                    <section>
                        <h2>Your Trip</h2>
                        <h3>Rede social para compartilhar roteiros de viagens</h3>
                        <p><span>--</span> Tecnologias: React, TypeScript, React-Router-Dom, React-Hook-form, Yup/Yup resolver, React toastify, Styled-Components, Axios, React Icons e JSON server.</p>
                        <p>Foi um projeto desenvolvido em equipe, onde atuei como SM.</p>
                        <a href="https://your-trip-black.vercel.app/" target="blank">Clique aqui para ver o projeto</a>
                    </section>

                    <section>
                        <h2>Kenzie Hub</h2>
                        <h3>É uma aplicação destinada a cadastrar tecnologias.</h3>
                        <p><span>--</span> Tecologias: React, React-Hook-form, Styled-Component, Axios, React-Icons, Toastify e etc, além de utilizar conceitos como Mobile first e Responsividade.</p>
                        <a href="https://github.com/DianaCarolineCV/Kenzie-Hub-Atualizado" target="blank">Clique aqui para ver o projeto</a>
                    </section>

                    <section>
                        <h2>Burguer</h2>
                        <h3>Um e-commerce com função de carrinho e pesquisa.</h3>
                        <p><span>--</span> Tecnologias: React e utilizando diversas bibliotecas. </p>
                        <a href="https://react-entrega-diana-caroline-cv-hamburgueria-da-kenzie.vercel.app/" target="blank">Clique aqui para ver o projeto</a>
                    </section>

                    <section>
                        <h2>Companies</h2>
                        <h3>Projeto que simula o funcionamento interno de uma empresa, com página de login, cadastro e homepage do administrador e funcionário. Possibilita a criação e exclusão de empresas, além da adição, edição e exclusão de departamentos, além de atualização cadastrais e visualização de informações. </h3>
                        <p><span>--</span> Tecnologias: Desenvolvido em Javascript</p>
                        <a href="https://github.com/DianaCarolineCV/-Companies" target="blank">Clique aqui para ver o projeto</a>
                    </section>

                    <section>
                        <h2>KImóveis</h2>
                        <h3>Um projeto de back-end responsável por gerenciar uma imobiliária utilizando TypeORM e relacionamentos</h3>
                        <p><span>--</span> Tecnologias: Desenvolvido em TypeScript</p>
                        <a href="https://github.com/DianaCarolineCV/KImoveis-TypeORM-com-Relacionamentos-DC" target="blank">Clique aqui para ver o projeto</a>
                    </section>

                    <section>
                        <h2>Pet Kare</h2>
                        <h3>API desenvolvida para que possa cadastrar, listar, buscar, atualizar e deletar pets.</h3>
                        <p><span>--</span> Tecnologias: Desenvolvido em Python/Django</p>
                        <a href="https://github.com/DianaCarolineCV/pet-kare-DianaCarolineCV" target="blank">Clique aqui para ver o projeto</a>
                    </section>

                    <section>
                        <h2>Buster</h2>
                        <h3>API com o intuito de realizar a gestão de vendas de filmes, permitindo a criação de usuários, autenticação, busca por ID, atualização, assim como a criação, listagem, busca e exclusão de arquivos. Além disso, inclui a funcionalidade de criação de pedidos.</h3>
                        <p><span>--</span> Tecnologias: Desenvolvido em Python/Django</p>
                        <a href="https://github.com/DianaCarolineCV/gerenciar-usuarios-filmes-e-compas-com-Django-DianaCarolineCV" target="blank">Clique aqui para ver o projeto</a>
                    </section>

                    <section>
                        <h2>BandKmap Generic View</h2>
                        <h3>Esse projeto foi adequar um sistema 'legado' que inicialmente já está desenvolvido com APIView e sqlite3, fazendo a transição para Generic Views, Model Serializer e Postgres, além de documentar e manter a integridade das funcionalidades já existentes.</h3>
                        <p><span>--</span> Tecologias: Desenvolvido em Python/Django</p>
                        <a href="https://github.com/DianaCarolineCV/bandkamp-generic-view-DianaCarolineCV" target="blank">Clique aqui para ver o projeto</a>
                    </section>
                </div>
            </Main>
        </>
    )
}

export default ProjectPage;