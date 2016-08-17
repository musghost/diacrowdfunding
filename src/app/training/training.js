import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';

export class Training extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="cases">
          <h1 className="text-center">Patrocinadores</h1>
          <div className="container">
            <div className="case">
              <div className="row">
                <div className="col-sm-6">
                  <div className="image">
                    <img src="assets/contact/patrocinadores.png"/>
                    <a href="http://www.crowdfundingmexico.mx/images/Home/crowdfunding.mp4" target="_blank">
                        <i className="fa fa-play" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h1>CROWDFUNDING MÉXICO </h1>
                  <p>Iniciativa del Fondo Multilateral de Inversiones (FOMIN) del Banco Interamericano de Desarrollo (BID) ejecutado por la Universidad Anáhuac a través del Centro IDEARSE con la participación de Nacional Financiera, el Instituto Nacional del Emprendedor, la Oficina de Estrategia Digital de la Presidencia de la República, la Comisión Nacional Bancaria y de Valores y la Asociación de Plataformas de Fondeo Colectivo, para impulsar proyectos vía crowdfunding o de financiamiento/fondeo colectivo, ecosistema que está en una fase inicial en México, y que es considerado un mercado alternativo de fondeo para proyectos innovadores a través de plataformas digitales.</p>
                  <br/>
                  <p>El proyecto prevé que se operen diversos cambios en el comportamiento de los empresarios y las MIPYME. Las actividades educativas y promocionales, aunadas a la elaboración y diseminación de materiales didácticos pertinentes, fomentarán el uso de las plataformas de financiamiento colectivo entre los empresarios y los microinversionistas.</p>
                  <div>
                  <a href="http://www.crowdfundingmexico.mx/" target="_blank">
                    <button>Ir al sitio</button>
                  </a>
                  </div>
                </div>
              </div>
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
