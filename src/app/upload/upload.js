import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';

const styles = {
  image: {
    backgroundImage: 'url(assets/uploads/uploads.jpg)'
  }
};

export class Upload extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="cases">
          <h1 className="text-center">Sube un proyecto</h1>
          <div className="upload">
            <div className="row">
              <div className="col-sm-6 instructions">
                <div>
                  <h1>¿Tienes un poyecto interesante con el cual quieres levantar capital o necesite un crédito?</h1>
                  <p>Si tienes un proyecto que desees presentar con un objetivo social, personal, de innovación, beneficios económicos, buscas un crédito o apoyo para una causa, tenemos 20 distintas plataformas de inversión que se pueden adaptar a tu proyecto, entra a la página de plataformas y elige el que más se adecúe a la descripción de tu proyecto.</p>
                  <p>Recuerda tener bien estructurado el objetivo principal, hacer un estudio previo de qué monto necesitarás para tu proyecto y segmentar los pasos a seguir para lograrlo, ¡existen muchas oportunidades para tí!</p>
                </div>
              </div>
              <div className="col-sm-6 image-upload" style={styles.image}>
                <img src="assets/uploads/uploads.jpg"/>
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
