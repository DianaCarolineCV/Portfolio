import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom"
import { Header, Main, FormStyle } from "./style";
import emailjs from '@emailjs/browser';
import Voltar from "../../styles/img/voltar.png"



function ContactPage() {

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: '',
    });

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y3qopaa', 'template_n336k7s', form.current, 'aVHlfaGnFrfivzzsk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setFormValues({
            name: '',
            email: '',
            message: '',
        });
    };
    return (
        <>
            <Header>
                <div>
                    <p>Fale comigo</p>
                    <Link to={"/"}><img src={Voltar} alt="seta" /></Link>
                </div>
                <hr />
            </Header>
            <Main>
                <section>
                    <h2>Informações de contato</h2>
                    <div>
                        <section>
                            <span>Email: </span>
                            <p>diannacaroline06@gmail.com</p>
                        </section>
                        <section>
                            <span>Telefone/Whats-app: </span>
                            <a href="https://wa.me/5573988267386?text=Ol%C3%A1%21" target="blank">(73) 98826-7386</a>
                        </section>
                    </div>
                </section>
                <FormStyle>
                    <h2>Me mande uma mensagem!</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <input type="text" name="user_name" placeholder="Nome" value={formValues.name}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, name: e.target.value })
                                } />
                            <input type="email" name="user_email" placeholder="Email" value={formValues.email}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, email: e.target.value })
                                } />
                        </div>
                        <textarea name="message" placeholder="Digite aqui..." value={formValues.message}
                            onChange={(e) =>
                                setFormValues({ ...formValues, message: e.target.value })
                            } />
                        <section>
                            <input type="submit" value="Enviar" />
                        </section>
                    </form>
                </FormStyle>
            </Main>
        </>
    )
}

export default ContactPage;