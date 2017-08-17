import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';
import axios from 'axios';

const styles = {
  image: {
    backgroundImage: 'url(assets/contact/contact.jpg)',
    backgroundSize: '110% 90%',
    backgroundPosition: 'center'
  }
};

export class Contact extends Component {

  constructor() {
    super();
    this.state = {
      submited: true,
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: '',
      occupation: '',
      business: '',
      lastName: '',
      identification: ''
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.setState({
      submited: false
    });
  }

  handleSetName = event => {
    this.setState({name: event.target.value});
  }
  handleSetEmail = event => {
    this.setState({email: event.target.value});
  }
  handleSetNumber = event => {
    this.setState({number: event.target.value});
  }
  handleSetTopic = event => {
    this.setState({topic: event.target.value});
  }
  handleSetMessage = event => {
    this.setState({message: event.target.value});
  }
  handleSetOccupation = event => {
    this.setState({occupation: event.target.value});
  }
  handleSetBusiness = event => {
    this.setState({business: event.target.value});
  }
  handleSetLastName = event => {
    this.setState({lastName: event.target.value});
  }
  handleSetIdentification = event => {
    this.setState({identification: event.target.value});
  }

  handleSubmit = () => {
    console.log('entro');
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.number);
    console.log(this.state.topic);
    console.log(this.state.message);
    console.log(this.state.occupation);
    console.log(this.state.business);
    console.log(this.state.lastName);
    console.log(this.state.identification);
    axios.post('http://dia-api.mellow.online/api/Contacts', {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      topic: this.state.topic,
      message: this.state.message,
      occupation: this.state.occupation,
      business: this.state.business,
      lastName: this.state.lastName,
      identification: this.state.identification
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <div id="cases">
          <h1 className="text-center">Regístrate</h1>
          <div className="upload contact">
            <div className="row">
              <div className="col-sm-6 instructions">
                <div>
                  <form onSubmit={this.handleOnSubmit}>
                    {this.state.submited ? (<div>
                      <div className="row">
                        <div className="col-sm-6">
                          <input type="text" placeholder="Nombre *" required onChange={this.handleSetName} pattern="[A-Za-z]+"/>
                        </div>
                        <div className="col-sm-6">
                          <input type="text" placeholder="Apellidos *" required onChange={this.handleSetLastName} pattern="[A-Za-z]+"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <select required onChange={this.handleSetOccupation}>
                            <option value="ocupacion">Ocupación *</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Empresario">Empresario</option>
                            <option value="Emprendedor">Emprendedor</option>
                          </select>
                        </div>
                        <div className="col-sm-6">
                          <input type="text" placeholder="CURP o RFC *" required onChange={this.handleSetIdentification} className="uppercase" minLength="12" maxLength="18" pattern="[A-Za-z0-9]+"/>
                          <small className="small">Consulta tu <a href="https://consultas.curp.gob.mx/CurpSP/inicio2_2.jsp" target="_blank">CURP</a> o <a href="http://www.mi-rfc.com.mx/consulta-rfc-homoclave" target="_blank">RFC</a></small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <input type="text" placeholder="Empresa o Proyecto" onChange={this.handleSetBusiness}/>
                        </div>
                        <div className="col-sm-6">
                          <input type="email" placeholder="E-Mail *" required onChange={this.handleSetEmail}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <input type="number" placeholder="Teléfonos *" required onChange={this.handleSetNumber}/>
                        </div>
                        <div className="col-sm-6">
                          <input type="text" placeholder="Tópico" onChange={this.handleSetTopic}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <textarea placeholder="Mensaje" rows="10" onChange={this.handleSetMessage}></textarea>
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit" onClick={this.handleSubmit}>Enviar Correo</button>
                      </div>
                    </div>) : (<p className="super-big-text">¡Gracias por enviar tus datos!</p>)}
                  </form>
                </div>
              </div>
              <div className="col-sm-6 image-upload hidden-xs hidden-sm" style={styles.image}>
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
