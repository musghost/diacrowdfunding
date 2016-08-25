import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';
import {Case} from './case';

const cases = [
  {
    project: 'Los Supercívicos',
    url: 'https://fondeadora.com/projects/supercivicos',
    type: 'Proyecto social',
    via: 'Fondeadora',
    image: 'assets/cases/supercivicos.png',
    text: ' El objetivo del Ejército Supercívico es crear una red de personas conscientes del entorno en el que viven, que están hartos de la corrupción y que adémas quieren vivir en una mejor ciudad. Señalando, denunciando y exhibiendo muchas de las faltas de valor, sentido humano y educación cívica que tienen los ciudadanos de la Ciudad de México por medio de videos, utilizando el humor como herramienta.'
  },
  {
    project: 'Tumbiko',
    url: 'https://playbusiness.mx/startups/tumbiko-2-0/snapshot',
    type: 'Moda',
    via: 'Play Business',
    image: 'assets/cases/tumbiko.png',
    text: ' Tumbiko, una red de distribución que vincula lo mejor del diseño y la herencia artesanal para crear piezas únicas que el mercado busca. Nuestro objetivo principal es crear "Lujo Accesible", llevando piezas directo del taller al consumidor final, a cada rincón de México y el mundo.'
  },
  {
    project: 'Laboratoria México, código que transforma',
    url: 'https://donadora.mx/projects/laboratoriamx',
    type: 'Tecnología',
    via: 'Donadora',
    image: 'assets/cases/laboratoria.png',
    text: 'Nuestro trabajo se enfoca en identificar a las jóvenes más talentosas en zonas económicamente marginadas y formarlas para que en pocos meses se conviertan en desarrolladoras web exitosas y agentes de cambio en la sociedad. El dinero se utilizó para abrir un  centro de formación, formar a 35 mujeres a partir de enero y contratar a un equipo altamente cualificado para formar a 200 mujeres más. '
  },
  {
    project: 'Ayúdame a Sonreír ante el Cáncer',
    url: 'https://youtu.be/n5YqHPQKKA4',
    type: 'Salud',
    via: 'HipGive',
    image: 'assets/cases/ayudameasonreir.jpg',
    text: 'Somos una asociación sin fines de lucro que promueve generar alternativas de bienestar emocional a los niños con cáncer, a través del poder curativo de la risa, mediante el juego y la diversión. Llenos de emoción y orgullo presentamos el video institucional de ASAC en el que podrán acercarse al trabajo y a la entrega que decenas de voluntarios realizan cada semana.'
  },
  {
    project: 'Paseo Satélite - Casa Álamo',
    url: 'https://www.briq.mx/proyectos/paseo-satelite-casa-alamo',
    type: 'Desarrollo inmobiliario',
    via: 'Briq.mx',
    image: 'assets/cases/paseosatelite.png',
    text: 'El proyecto, previamente inconcluso, fue adquirido por Terra Sat con capital propio. La empresa ha invertido en recuperar el fraccionamiento, instalando iluminación y drenaje, y construyendo áreas comunes. El proyecto involucra la construcción de casas para su venta, bajo el diseño del despacho ADG, el cual cuenta con amplia experiencia y reconocimiento internacional.'
  },
  {
    project: 'Enchúlame la bici',
    url: 'http://www.idea.me/proyectos/575/enchulame-la-bici',
    type: 'Emprendedores',
    via: 'Ideame',
    image: 'assets/cases/enchulame-la-bici.jpg',
    text: 'Taller comunitario dedicado a reciclar y armar bicis personalizadas, dar clases de mecánica básica y asesorar al ciclista urbano.'
  },
  {
    project: 'GDL Van',
    url: 'https://www.youtube.com/watch?v=azr0S2qg3uc',
    type: 'Emprendedores',
    via: 'Pitchbull',
    image: 'assets/cases/gdlvan.jpg',
    text: 'Servicio de transporte en camionetas'
  },
  {
    project: 'Jours De Papier',
    url: 'https://fondeadora.com/projects/reimpresion-jours-de-papier',
    type: 'Editorial',
    via: 'Fondeadora',
    image: 'assets/cases/jours.png',
    text: 'Jours de Papier es un webcómic que publicamos en Facebook desde hace más de dos años. Éste relata, de manera cómica, situaciónes cotidianas de la vida de pareja de Tania y Esteban. El dinero se recaudó para realizar la reimpresión de los 3 libros que hasta ahora han sido publicados por Jours de Papier.'
  },
  {
    project: 'Voces Mesoamericanas Acción con Pueblos Migrantes A.C.',
    url: 'https://youtu.be/fGcBYQFbxwY',
    type: 'Proyecto social',
    via: 'HipGive',
    image: 'assets/cases/voces.jpeg',
    text: 'El 1ro de febrero el Museo Migrante visitó la comunidad de Poconichim'
  },
  {
    project: 'Samaya',
    url: 'https://playbusiness.mx/startups/samaya-serie-a/snapshot',
    type: 'Tecnología',
    via: 'Play Business',
    image: 'assets/cases/samaya.png',
    text: 'Samaya es una plataforma de administración y envío de información multimedia que los equipos de ventas necesitan cuando están frente a un cliente. Para las empresas una herramienta de comunicación, para los vendedores una herramienta para vender.'
  },
  {
    project: 'Frontera 159',
    url: 'https://www.briq.mx/proyectos/frontera-159',
    type: 'Desarrollo inmobiliario',
    via: 'Briq.mx',
    image: 'assets/cases/frontera159.png',
    text: 'Frontera 159 es un proyecto residencial, el cual consiste en la remodelación de un edificio recuperado por Grupo Russell, empresa afiliada a Tierra Capital. El proyecto se llevará a cabo en un edificio adquirido por Grupo Russell con capital propio. El uso del financiamiento será para la remodelación y venta del inmueble.'
  },
  {
    project: 'Kaluna',
    url: 'http://www.idea.me/proyectos/557/proyecto-kaluna',
    type: 'Moda',
    via: 'Ideame',
    image: 'assets/cases/kaluna.jpg',
    text: 'Revolucionamos el concepto de "green apparel". ¡Ropa y accesorios hechos con materiales reciclados! ¡Moda sustentable y rastreable!'
  },
  {
    project: 'Mesa de regalos Adriana y Ramón',
    url: 'https://fondify.mx/Adriana_y_jose_ramon_cerna',
    type: 'Otros',
    via: 'Fondify',
    image: 'assets/cases/mesa.jpg',
    text: 'Mesa de regalos para recaudar fondos para la luna de miel'
  },
  {
    project: 'Latiendo por Fer',
    url: 'https://donadora.mx/projects/latiendo-por-fer',
    type: 'Salud',
    via: 'Donadora',
    image: 'assets/cases/latiendo.jpg',
    text: 'Fer Silvestri tiene una enfermedad llamada Estenosis de las venas pulmonares, por lo que necesita una operación, cuyo objeto es dilatar las venas que tenemos en los pulmones para que tengan un diámetro adecuado y así pueda fluir la sangre de acuerdo a las necesidades fisiológicas de Fer, esto liberaría la presión que hoy tiene su corazón, que es 3 veces la presión normal de cualquier persona de su edad. '
  },
  {
    project: 'Assetel',
    url: 'https://www.youtube.com/watch?v=KpALsCBrr8A',
    type: 'Tecnología',
    via: 'Pitchbull',
    image: 'assets/cases/assetel.jpg',
    text: 'Proveedor de servicios de conectividad administrada por internet'
  }
];

export class Cases extends Component {
  render() {
    return (
      <div >
        <Header/>
        <div id="cases" className="main">
          <h1 className="text-center">Casos de éxito</h1>
          <div className="container">
            <Case {...cases[0]}/>
            <Case {...cases[1]}/>
            <Case {...cases[2]}/>
            <Case {...cases[3]}/>
            <Case {...cases[4]}/>
            <Case {...cases[5]}/>
            <Case {...cases[6]}/>
            <Case {...cases[7]}/>
            <Case {...cases[8]}/>
            <Case {...cases[9]}/>
            <Case {...cases[10]}/>
            <Case {...cases[11]}/>
            <Case {...cases[12]}/>
            <Case {...cases[13]}/>
            <Case {...cases[14]}/>
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
