import './header.css'

import { Link, animateScroll as scroll } from 'react-scroll';

function Header(){
    return(
        <header className="header">
            <div className='logo'>
                <span>Rafael Camilli Vieira</span>
                <span id='subtitle'>Web Developer</span>
            </div>
            
            <nav>
                <ul>
                    <li><Link to='Sobre' spy={true} smooth={true} duration={500}>Sobre</Link></li>
                    <li><Link to='Skills' spy={true} smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to='Projetos' spy={true} smooth={true} duration={500}>Projetos</Link></li>
                    <li><Link to='contato' spy={true} smooth={true} duration={500}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;