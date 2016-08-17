import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';
import {Project} from './project';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

const projects = [
  {
    link: 'MODA',
    url: 'https://www.crowdfunder.mx/glam2go-s2',
    text: 'Glam2Go',
    style: {
      backgroundImage: 'url(assets/projects/project1.jpg)'
    },
    content: {
      title: 'Glam2Go',
      tag: 'MODA',
      text: (
        <div>
          <p>Glam2Go es una aplicación a través de la que se resuelve, una necesidad de estilo de vida no atendida para mujeres que valoran la eficiencia, tiempo, precio y calidad y por otro lado, una oferta de servicio prestada por profesionales de la industria de belleza.</p>
        </div>
      )
    }
  },
  {
    link: 'ARTE Y CULTURA',
    url: 'https://fondeadora.mx/projects/sun-gold-malibu',
    text: 'Sun Gold Malibú',
    style: {
      backgroundImage: 'url(assets/projects/project2.jpg)'
    },
    content: {
      title: 'Sun Gold Malibú',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Sun Gold Malibú es un cortometraje de ficción dirigido por Natalia Bermúdez. El proyecto será filmado en 16 y 35 mm en octubre de 2016. Tu colaboración será de gran ayuda para transportar a el crew y a el equipo en este viaje fílmico.</p>
        </div>
      )
    }
  },
  {
    link: 'Editorial',
    url: 'https://fondeadora.mx/projects/animalpolitico',
    text: 'Animal Politico',
    style: {
      backgroundImage: 'url(assets/projects/project3.jpg)'
    },
    content: {
      title: 'Animal Politico',
      tag: 'EDITORIAL',
      text: (
        <div>
          <p>Portal que hace periodismo independiente. Con temas como: la corrupción, el medio ambiente, el crecimiento de la violencia, la rendición de cuentas de los políticos y lo que sucede en México y el mundo. El dinero se utilizará para poder seguir haciendo periodismo independiente.</p>
        </div>
      )
    }
  },
  {
    link: 'Diseño',
    url: 'https://www.pitchbull.com/auction/detalleSubasta.xhtml?auctionId=40',
    text: 'Pretmex',
    style: {
      backgroundImage: 'url(assets/projects/project4.jpg)'
    },
    content: {
      title: 'Pretmex',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>La primera SOFOM de México que se financia vía P2P.</p>
        </div>
      )
    }
  },
  {
    link: 'Proyecto social',
    url: 'https://www.pitchbull.com/auction/detalleSubasta.xhtml?auctionId=42',
    text: 'Forma de vida',
    style: {
      backgroundImage: 'url(assets/projects/project5.jpg)'
    },
    content: {
      title: 'Forma de vida',
      tag: 'Proyecto social',
      text: (
        <div>
          <p>Empresa 100% Mexicana dedicada a la capacitación a través de una metodología única en el país basada en PNL (Programación Neurolingüística). </p>
        </div>
      )
    }
  },
  {
    link: 'PROYECTO SOCIAL',
    url: 'https://www.micochinito.com/cochinitos/ver/i/150/cochinito/eco-calli',
    text: 'Eco Cali',
    style: {
      backgroundImage: 'url(assets/projects/project6.jpg)'
    },
    content: {
      title: 'Eco Cali',
      tag: 'PROYECTO SOCIAL',
      text: (
        <div>
          <p>Proyecto que busca ayudar a las comunidades de la Reserva de la Biosfera de Los Tuxtlas a mejorar su calidad de vida, y reducir el impacto al medio ambiente, impulsando programas como la recolección de basura en las playas, limpieza de calles y comunidades, recolección de desechos reciclables, huertos familiares y composteo</p>
        </div>
      )
    }
  },
  {
    link: 'Proyecto social',
    url: 'http://www.idea.me/projects/44014/refugio-corazon-animal',
    text: 'Refugio Corazón Animal',
    style: {
      backgroundImage: 'url(assets/projects/project7.jpeg)'
    },
    content: {
      title: 'Refugio Corazón Animal ',
      tag: 'Proyecto social ',
      text: (
        <div>
          <p>Tenemos un modesto refugio donde viven 106 perros rescatados, pero debemos desocupar la propiedad. Buscamos fondos para construir.</p>
        </div>
      )
    }
  },
  {
    link: 'Editorial',
    url: 'http://www.idea.me/projects/43914/el-arte-del-futbol',
    text: 'El Arte del Fútbol',
    style: {
      backgroundImage: 'url(assets/projects/project8.jpeg)'
    },
    content: {
      title: 'El Arte del Fútbol',
      tag: 'Editorial',
      text: (
        <div>
          <p>"En este libro, a través de 90 infografías, se mezcla el fútbol con la arquitectura, el cine, la literatura y la historia."</p>
        </div>
      )
    }
  },
  {
    link: 'Desarrollo inmobiliario',
    url: 'https://www.briq.mx/proyectos/Quer%C3%A9taro%20Bellavista',
    text: 'Bellavista',
    style: {
      backgroundImage: 'url(assets/projects/project9.png)'
    },
    content: {
      title: 'Bellavista',
      tag: 'Desarrollo inmobiliario',
      text: (
        <div>
          <p>Querétaro Bellavista es un desarrollo residencial en etapa de nueva construcción ubicado en uno de los centros urbanos de mayor crecimiento en México: la ciudad de Querétaro. El proyecto a financiar a través de Briq.mx es la segunda fase del desarrollo.</p>
        </div>
      )
    }
  },
  {
    link: 'Proyecto Social',
    url: 'https://hipgive.org/project/take-a-stand-against-human-trafficking/',
    text: 'Take a stand against human trafficking',
    style: {
      backgroundImage: 'url(assets/projects/project10.png)'
    },
    content: {
      title: 'Take a stand against human trafficking',
      tag: 'Proyecto Social ',
      text: (
        <div>
          <p>The money raised here will go directly to support nonprofits that are fighting to eradicate human trafficking and exploitation in Mexico and the U.S. HIP provides financial and technical support to increase organizational capacity and reach.</p>
        </div>
      )
    }
  },
  {
    link: 'Tecnología',
    url: 'https://playbusiness.mx/startups/modula/snapshot',
    text: 'Modula',
    style: {
      backgroundImage: 'url(assets/projects/project11.png)'
    },
    content: {
      title: 'Modula',
      tag: 'Tecnología',
      text: (
        <div>
          <p>Creamos un Dron multifuncional, amigable y accesible para que no solo tengas un dron que se eleva y toma selfies. Tengas el drone que necesitas y puedas potencializar tu negocio con el. Gracias a nuestro diseño Modular podrás cambiar diferentes accesorios para darle un nuevo giro al dron; cambiando motores para soportar más peso, hélices para ir más rápido, sensores descubriendo nuevos datos, cámaras capturando lo mejor de tu alrededor. </p>
        </div>
      )
    }
  },
  {
    link: 'Emprendimiento',
    url: 'https://playbusiness.mx/startups/leco/snapshot',
    text: 'Leco',
    style: {
      backgroundImage: 'url(assets/projects/project12.png)'
    },
    content: {
      title: 'Leco',
      tag: 'Emprendimiento',
      text: (
        <div>
          <p>LECO es una marca omnicanal (digital y retail) que transforma por completo la experiencia de consumir moda y salud visual. Desde inicios del 2015 se encuentra desarrollando un concepto moderno de salud y moda visual con capacidad para dominar el mercado en nuestro país. ¿El objetivo? Transformar la forma en la que funciona esta industria</p>
        </div>
      )
    }
  },
  {
    link: 'Tecnología',
    url: 'https://fondify.mx/Moonki',
    text: 'Moonki',
    style: {
      backgroundImage: 'url(assets/projects/project13.jpeg)'
    },
    content: {
      title: 'Moonki',
      tag: 'Tecnología',
      text: (
        <div>
          <p>Wearable pensado para mamás millenials, queremos ayudarlas en la tarea de cuidar a sus pequeños. Con Moonki podrás estar al pendiente de tu bebé aún cuando no estén juntos, con sólo revisar tu teléfono celular podrás ver a tu bebé y monitorear su ritmo cardíaco, temperatura y la posición en la que está durmiendo, de ésta forma evitarás visitas innecesarias al pediatra. </p>
        </div>
      )
    }
  },
  {
    link: 'Editorial',
    url: 'https://fondify.mx/Adrian',
    text: '100 cosas que todo mexicano debe saber',
    style: {
      backgroundImage: 'url(assets/projects/project14.png)'
    },
    content: {
      title: '100 cosas que todo mexicano debe saber',
      tag: 'Editorial',
      text: (
        <div>
          <p>"100 cosas que todo mexicano debe saber" los temas están divididos en 6 capítulos, Historia de México, Religión, Política, Economía, Fútbol, y mexicano distinguidos y leyendas de nuestro país. Todo perfectamente documentado explicado en breves capítulos en un lenguaje simple y sencillo.</p>
        </div>
      )
    }
  },
  {
    link: 'Desarrollo inmobiliario',
    url: 'http://expansive.mx/cruz-verde-188/',
    text: 'Cruz Verde',
    style: {
      backgroundImage: 'url(assets/projects/project15.jpg)'
    },
    content: {
      title: 'Cruz Verde',
      tag: 'Desarrollo inmobiliario',
      text: (
        <div>
          <p>"Forma parte de la construcción de una casa de segmento alto con una vista arbolada a una barranca. Ubicado en la Zona Sur de la Ciudad de México, en la Delegación Magdalena Contreras, este proyecto es ejecutado por una desarrolladora con gran experiencia y promete ser un referente en el área."</p>
        </div>
      )
    }
  },
  {
    link: 'Desarrollo inmobiliario',
    url: 'http://expansive.mx/adamant-merida-2/',
    text: 'Adamant',
    style: {
      backgroundImage: 'url(assets/projects/project16.jpg)'
    },
    content: {
      title: 'Adamant',
      tag: 'Desarrollo inmobiliario',
      text: (
        <div>
          <p>Crece tu patrimonio invirtiendo en un proyecto único en el mercado. Se trata de un concepto residencial desarrollado por Milk Life Investments con la marca Adamant dentro del desarrollo Cabo Norte en la ciudad de Mérida. Un proyecto ubicado dentro de una zona con alta plusvalía en una de las ciudades con mayor crecimiento en México.</p>
        </div>
      )
    }
  },
  {
    link: 'PROYECTO',
    url: 'http://www.konsigue.com/quiero-invertir',
    text: 'Proyectos',
    style: {
      backgroundImage: 'url(assets/projects/project17.jpg)'
    },
    content: {
      title: 'Proyectos',
      tag: 'PROYECTO',
      text: (
        <div>
          <p>La primer plataforma de factoraje financiero y préstamos personales con fondeo colectivo en México.</p>
        </div>
      )
    }
  },
  {
    link: 'Salud',
    url: 'https://donadora.mx/projects/hoy-por-matias',
    text: 'Hoy por Matías',
    style: {
      backgroundImage: 'url(assets/projects/project18.jpg)'
    },
    content: {
      title: 'Hoy por Matías',
      tag: 'Salud',
      text: (
        <div>
          <p>Matías es un pequeño de 7 años que nació con Agenesia del Cuerpo Calloso, lo que significa que los dos hemisferios del cerebro no se conectan y eso hace que no mande señales a su cuerpo. La ayuda, la usaremos para los cuidados especializados que requiere Matías, tales como rehabilitación de la operación reciente, cuidados intensivos 24/7, silla de ruedas especial, oxígeno especial, terapias físicas (lenguaje, coordinación, motrices, etc...), medicinas, radiografías, traslados al hospital y gastos para la operación de su otra piernita.</p>
        </div>
      )
    }
  },
  {
    link: 'Salud',
    url: 'https://donadora.mx/projects/por-maya-mi-amor',
    text: 'Maya mi amor',
    style: {
      backgroundImage: 'url(assets/projects/project19.jpg)'
    },
    content: {
      title: 'Maya mi amor',
      tag: 'Salud',
      text: (
        <div>
          <p>Maya tiene 2 meses de edad y nació con un síndrome llamado Goldenhar el cual le provocó varias malformaciones físicas, de órganos y problemas neurológicos. Queremos crear un fondo de gastos médicos para Maya, que tendrá el objetivo de ir cubriendo los gastos de las cirugías, medicamentos, estudios y terapias que va a necesitar durante los próximos años.</p>
        </div>
      )
    }
  }
];

export class Projects extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <div id="projects" className="main">
          <h1 className="text-center">Proyectos</h1>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Project {...projects[0]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[1]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[2]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[3]}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Project {...projects[4]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[5]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[6]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[7]}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Project {...projects[8]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[9]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[10]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[11]}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Project {...projects[12]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[13]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[14]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[15]}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Project {...projects[16]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[17]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[18]}/>
            </div>
          </div>
        </div>
        <section id="sponsors">
          <div className="container">
            <img src="assets/home/sponsors.jpg"/>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}
