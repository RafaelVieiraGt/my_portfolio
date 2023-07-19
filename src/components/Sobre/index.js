import './sobre.css'
import perfil from '../../assets/Perfil/foto.jpeg'
import {AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import figure from '../../assets/Profile image/Networking.svg'

function Sobre(){

    function curriculumNavigate(){
        window.location.href = "https://drive.google.com/file/d/1dU9QHYIvErkz3PlkM3hk7lsliEYq3RmU/view?usp=sharing"
    }
    return(
        <div className='container-mae-sobre' id='Sobre'>
            <div className='container-sobre'>
                <div className='image-sobre'>
                    <img src={perfil} alt='Foto de perfil'/>
                </div>
                <div className='sobre-conteudo'>
                    <h1>Quem sou eu?</h1>
                    <p>Meu nome é Rafael, sou um desenvolvedor web Full-Stack de 18 anos (React js + Python)
                        que está em busca de sua primeira experiência profissional.</p>
                    
                    <div className='icons'>
                        <a href='https://www.linkedin.com/in/rafael-camilli-vieira-077355269/'><AiOutlineGithub size={35} className='a'/></a>
                        <a href='https://github.com/RafaelVieiraGt'><AiFillLinkedin size={35} className='a'/></a>
                        <a href='https://www.instagram.com/rafael_cvieira/?hl=pt-br'><AiOutlineInstagram size={35} className='a'/></a>
                    </div>
                    
                    <button onClick={curriculumNavigate}>Ver Curriculum</button>
                </div>
            </div>
            <div className='figure-sobre'>
                <img src={figure} alt='ilustração'/>
            </div>
        </div>
    )
}
export default Sobre;