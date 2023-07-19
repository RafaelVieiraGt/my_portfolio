import './skills.css';
import htmlcssJs from '../../assets/Skills images/Html Css Js.svg';
import reactJs from '../../assets/Skills images/reactJs.svg';
import pythonImg from '../../assets/Skills images/python.svg';
import djangoImg from '../../assets/Skills images/django.png';
import cloudImg from '../../assets/Skills images/cloud.svg';


function Skills(){

    const skills = [
        {nome: "HTML5| CSS3| Javascript", subtitulo: "Capacidade de realização de diversas telas para qualquer fim com as tecnologias atuais.", pic: htmlcssJs},
        {nome: "React Js", subtitulo: "Domínio de um dos frameworks mais poderosos de desenvolvimento Web (aplicação desenvolvida em React Js).", pic: reactJs},
        {nome: "Python", subtitulo: "Uma das linguagens mais poderosas e versáteis do mercado, se tratando de Web, automações, dados, e etc.", pic: pythonImg},    
    ];

    const skills1 = [
        {nome: "Django", subtitulo: "A framework python mais poderosa para web, graças à sua confiabilidade, segurança e melhorias contínuas.", pic: djangoImg},
        {nome: "Cloud Computing", subtitulo: "Possuo a certificação Az900 do treinamento de computação em nuvem microsoft, e disposto à continuar a trilha.", pic: cloudImg}
    ]
    return(
        <div className="container-mae-skills" id='Skills'>
            <div className='skills-conteudo'>
                <h1>Skills</h1>
                <div className='underline'></div>
                <div className='article'>
                    {skills.map((item) => {
                    return(
                        <article>
                            <h2>{item.nome}</h2>
                            <img src={item.pic} alt="imagem da tecnologia"/>
                            <p>{item.subtitulo}</p>
                        </article>
                    )
                    })}
                </div>
                <div className='article'>
                    {skills1.map((item) => {
                        return(
                            <article>
                                <h2>{item.nome}</h2>
                                <img src={item.pic} alt="imagem da tecnologia"/>
                                <p>{item.subtitulo}</p>
                            </article>
                        )
                        })}
                </div>
                
            </div>
        </div>
    )
}

export default Skills;