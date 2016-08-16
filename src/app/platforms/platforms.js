import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';
import {Platform} from './platform.js';

const platforms = [
  [
    {
      image: 'assets/platforms/platform1.png',
      name: 'YOTEPRESTO',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform2.png',
      name: 'TREBOL CAPITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform3.png',
      name: 'DOOPLA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform4.png',
      name: 'LA TASA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ],
  [
    {
      image: 'assets/platforms/platform5.png',
      name: 'FINV',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform6.png',
      name: 'MULTICREDI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform7.png',
      name: 'MICOCHINITO',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform8.png',
      name: 'FONDEADORA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ],
  [
    {
      image: 'assets/platforms/platform9.png',
      name: 'YOTEPRESTO',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform10.png',
      name: 'TREBOL CAPITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform11.png',
      name: 'DOOPLA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform12.png',
      name: 'LA TASA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ],
  [
    {
      image: 'assets/platforms/platform13.png',
      name: 'YOTEPRESTO',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform14.png',
      name: 'TREBOL CAPITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform15.png',
      name: 'DOOPLA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform16.png',
      name: 'LA TASA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ],
  [
    {
      image: 'assets/platforms/platform17.png',
      name: 'YOTEPRESTO',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform18.png',
      name: 'TREBOL CAPITAL',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform19.png',
      name: 'DOOPLA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'assets/platforms/platform20.png',
      name: 'LA TASA',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
