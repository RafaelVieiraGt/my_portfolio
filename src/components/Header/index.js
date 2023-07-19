import './header.css'

function Header(){
    return(
        <header className="header">
            <div className='logo'>
                <span>Rafael Camilli Vieira</span>
                <span id='subtitle'>Web Developer</span>
            </div>
            
            <nav>
                <ul>
                    <li><a href="#Sobre">Sobre</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;