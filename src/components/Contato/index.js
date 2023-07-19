import { useState } from "react";
import emailjs from '@emailjs/browser';
import image from '../../assets/MailBox/mailBox.svg';
import './contato.css'


function Contato(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")

    function sendEmail(e){
        e.preventDefault();

        if(nome === "" || email === "" || subject === ""){
            alert("Por favor, preencha todos os campos")
            return
        }

        const templateParams = {
            from_name: nome,
            message: subject,
            email: email
        }

        emailjs.send("service_9zwpik5", "template_96kcp5v", templateParams, "9-exQiwsydaRAcT5E")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setEmail("");
            setNome("");
            setSubject("");
        }, (error) => {
            console.log(error)
        })

    }

    return(
        <div className="container" id="contato">
            <div className="content">
                <h1>Gostou do meu Trabalho?</h1>
                <span>Fale comigo!</span>

                <form className="form" onSubmit={sendEmail}>
                    <label>Nome</label>
                    <input type="text" placeholder="Seu Nome" value={nome} onChange={(e) => {setNome(e.target.value)}}/>
                    <label>Email</label>
                    <input type="text" placeholder="email@email.com" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <label>Assunto</label>
                    <textarea placeholder="Digite sua mensagem!" value={subject} onChange={(e) => {setSubject(e.target.value)}}/>

                    <button type="submit">Enviar E-mail</button>
                </form>
            </div>    
            <div className="image">
                <img src={image}/>
            </div>           
        </div>
    )
}

export default Contato;