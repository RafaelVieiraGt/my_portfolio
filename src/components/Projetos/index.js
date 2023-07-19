import './projetos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
//IMAGENS
import tela1 from '../../assets/Telas/tarefas.JPG';
import tela2 from '../../assets/Telas/primeflix.JPG';
import tela3 from '../../assets/Telas/viagens.JPG';
import tela4 from '../../assets/Telas/fusion.jpeg';
import tela5 from '../../assets/Telas/django2.PNG';

function Projetos(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return(
        <div className='container-projetos' id='Projetos'>
            <div className='subtitulo-projetos'>
              <h1>Projetos</h1>
              <div className='underline-projetos'></div>
            </div>  
            
            <Slider {...settings}>
                <div className='slide'>
                  <div className='slide-content'>
                    <h2>Lo's Responsabilities</h2>
                    <div className='zoom'>
                      <img src={tela1}/>
                    </div>
                    <a href='https://los-responsabilities.netlify.app/'>Acessar</a>
                  </div>  
                </div>
                <div className='slide'>
                  <div className='slide-content'>
                    <h2>Primeflix</h2>
                    <div className='zoom'>
                      <img src={tela2}/>
                    </div>
                    <a href='https://rafael-vieira.netlify.app/'>Acessar</a>
                  </div>  
                </div>
                <div className='slide'>
                  <div className='slide-content'>
                    <h2>Agência de Viagens</h2>
                    <div className='zoom'>
                      <img src={tela3}/>
                    </div>
                    <a href='https://rafaelvieiragt.github.io/'>Acessar</a>
                  </div>  
                </div>
                <div className='slide'>
                  <div className='slide-content'>
                    <h2>Fusion (Back-end)</h2>
                    <div className='zoom'>
                      <img src={tela4}/>
                    </div>
                    <a href='https://github.com/RafaelVieiraGt/Fusion'>Acessar</a>
                  </div>  
                </div>
                <div className='slide'>
                  <div className='slide-content'>
                    <h2>Controle de estoque (Back-end)</h2>
                    <div className='zoom'>
                      <img src={tela5}/>
                    </div>
                    <a href='https://github.com/RafaelVieiraGt/Django-app-2'>Acessar</a>
                  </div>  
                </div>
                <div className='slide'>
                  <div className='slide-content'>
                    <h2>Lo's Responsabilities</h2>
                    <div className='zoom'>
                      <img src={tela1}/>
                    </div>
                    <a href='https://los-responsabilities.netlify.app/'>Acessar</a>
                  </div>  
                </div>
            </Slider>
        </div>
    )
}

export default Projetos;