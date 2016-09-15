import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';
import {Platform} from './platform.js';

const platforms = [
  [
    {
      image: 'assets/platforms/platform11.png',
      name: 'Afluenta',
      text: 'Plataforma de formación de negocios colaborativos.',
      link: 'https://www.afluenta.com/'
    },
    {
      image: 'assets/platforms/platform9.png',
      name: 'Briq.mx',
      text: 'Plataforma de inversión en proyectos de bienes raíces.',
      link: 'https://www.briq.mx/'
    },
    {
      image: 'assets/platforms/platform13.png',
      name: 'Crowdfunder',
      text: 'Plataforma de fondeo de proyectos.',
      link: 'https://www.crowdfunder.mx'
    },
    {
      name: "Donadora",
      text: "Plataforma de fondeo de causas sociales y personales",
      link: "https://donadora.mx/",
      image: "assets/platforms/platform21.png"
    }
  ],
  [
    {
      name: "Doopla",
      text: "Plataforma de préstamos persona a persona",
      link: "https://www.doopla.mx/",
      image: "assets/platforms/platform4.png"
    },
    {
      name: "Expansive",
      text: "lataforma de crowdfunding inmobiliario",
      link: "http://expansive.mx/",
      image: "assets/platforms/platform18.png"
    },
    {
      name: "Finv",
      text: "Plataforma de crowdfunding sostenible",
      link: "https://finv.mx/",
      image: "assets/platforms/platform5.png"
    },
    {
      name: "Fondeadora",
      text: "Plataforma de fondeo de proyectos creativos",
      link: "https://fondeadora.mx/",
      image: "assets/platforms/platform8.png"
    }
  ],
  [
    {
      name: "Fondify",
      text: "Financiamiento colectivo ",
      link: "https://fondify.mx/",
      image: "assets/platforms/platform20.png"
    },
    {
      name: "HipGive",
      text: "Smart Investments in Latino Communities Across the Americas",
      link: "https://hipgive.org/es",
      image: "assets/platforms/platform12.png"
    },
    {
      name: "I Venture",
      text: "Plataforma de fondeo de alto impacto ",
      link: "http://www.iventu.re/",
      image: "assets/platforms/platform19.png"
    },
    {
      name: "Ideame",
      text: "Financiamiento colectivo en Latinoamérica",
      link: "http://www.idea.me/",
      image: "assets/platforms/platform17.png"
    }
  ],
  [
    {
      name: "Konsigue",
      text: "Plataforma de factoraje financiero y préstamos personales con fondeo colectivo ",
      link: "http://www.konsigue.com/",
      image: "assets/platforms/platform22.png"
    },
    {
      name: "Kubo Financiero",
      text: "Conecta a personas que necesitan un préstamo con personas que buscan inversión oportunidades de inversión",
      link: "http://www.kubofinanciero.com/Kubo/Portal/index.xhtml",
      image: "assets/platforms/platform15.png"
    },
    {
      name: "La Tasa",
      text: "Conecta a personas que buscan un crédito, directo con inversionistas ",
      link: "https://www.latasa.mx/",
      image: "assets/platforms/platform3.png"
    },
    {
      name: "Micochinito",
      text: "Plataforma de Financiamiento Colectivo ",
      link: "https://www.micochinito.com/",
      image: "assets/platforms/platform7.png"
    }
  ],
  [
    {
      name: "Multicredi",
      text: "Portal que capta solicitudes de crédito y/o arrendamiento en Internet para el mercado Mexicano ",
      link: "https://www.multicredi.com/",
      image: "assets/platforms/platform6.png"
    },
    {
      name: "Pitchbull",
      text: "Plataforma que permite a las PYMES acceder a financiamiento ágil y competitivo ",
      link: "https://www.pitchbull.com/",
      image: "assets/platforms/platform10.png"
    },
    {
      name: "Play Business",
      text: "Plataforma de equity crowdfunding para inversión en startups.  ",
      link: "https://playbusiness.mx/",
      image: "assets/platforms/platform16.png"
    },
    {
      name: "Prestadero",
      text: "Comunidad de préstamos entre personas",
      link: "https://www.prestadero.com/",
      image: "assets/platforms/platform14.png"
    }
  ],
  [
    {
      name: "Trebol Capital",
      text: "Fondo de capital privado para startups ",
      link: "http://www.trebolcapital.com/",
      image: "assets/platforms/platform2.png"
    },
    {
      name: "Yotepresto",
      text: "Préstamos personales e inversiones para personas ",
      link: "https://www.yotepresto.com/",
      image: "assets/platforms/platform1.png"
    }
  ]

];

export class Platforms extends Component {
  render() {
    let row1 = platforms[0].map((platform, xi) => {
      return (
        <div className="col-md-3 col-sm-6" key={xi}>
          <Platform {...platform}/>
        </div>
      );
    });

    let row2 = platforms[1].map((platform, xi) => {
      return (
        <div className="col-md-3 col-sm-6" key={xi}>
          <Platform {...platform}/>
        </div>
      );
    });

    let row3 = platforms[2].map((platform, xi) => {
      return (
        <div className="col-md-3 col-sm-6" key={xi}>
          <Platform {...platform}/>
        </div>
      );
    });

    let row4 = platforms[3].map((platform, xi) => {
      return (
        <div className="col-md-3 col-sm-6" key={xi}>
          <Platform {...platform}/>
        </div>
      );
    });

    let row5 = platforms[4].map((platform, xi) => {
      return (
        <div className="col-md-3 col-sm-6" key={xi}>
          <Platform {...platform}/>
        </div>
      );
    });

    let row6 = platforms[5].map((platform, xi) => {
      return (
        <div className="col-md-3 col-sm-6" key={xi}>
          <Platform {...platform}/>
        </div>
      );
    });
    return (
      <div>
        <Header/>
        <div id="cases">
          <h1 className="text-center">Plataformas</h1>
          <div className="row">
            {row1}
          </div>
          <div className="row">
            {row2}
          </div>
          <div className="row">
            {row3}
          </div>
          <div className="row">
            {row4}
          </div>
          <div className="row">
            {row5}
          </div>
          <div className="row">
            {row6}
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
