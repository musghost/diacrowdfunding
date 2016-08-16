import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';

const styles = {
  image: {
    backgroundImage: 'url(assets/contact/contact.jpg)'
  }
};

export class Contact extends Component {

  constructor() {
    super();
    this.state = {
      submited: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submited: false
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <div id="cases">
          <h1 className="text-center">Contact</h1>
          <div className="upload contact">
            <div className="row">
              <div className="col-sm-6 instructions">
                <div>
                  <form onSubmit={this.handleSubmit}>
                    {this.state.submited ? (<div>
                      <div className="row">
                        <div className="col-sm-6">
                          <input type="text" placeholder="Nombre *"/>
                        </div>
                        <div className="col-sm-6">
                          <input type="email" placeholder="E-Mail *"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <input type="text" placeholder="Teléfonos"/>
                        </div>
                        <div className="col-sm-6">
                          <input type="text" placeholder="Tópico"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <textarea placeholder="Mensaje *" rows="10"></textarea>
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit">Enviar Correo</button>
                      </div>
                    </div>) : (<p className="super-big-text">¡Gracias por enviar tus datos!</p>)}
                  </form>
                </div>
              </div>
              <div className="col-sm-6 image-upload" style={styles.image}>
                <img src="assets/contact/contact.jpg"/>
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
