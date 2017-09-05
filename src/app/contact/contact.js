import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


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
      message: '',
      estado: '',
      number: 5511223344,
      lastName: 'Random',
      identification: 'Random',
      business: 'Business',
      birthdate: '',
      startDate: moment()
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

   handleChange(date) {
    this.setState({
      startDate: date
    });
    this.setState({
      birthdate: date._d}
    );
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
  handleSetMessage = event => {
    this.setState({message: event.target.value});
  }
  handleSetEstado = event => {
    this.setState({estado: event.target.value});
  }

  handleSubmit = () => {
    console.log('entro');
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.topic);
    console.log(this.state.message);
    console.log(this.state.estado);
    console.log(this.state.birthdate);
    console.log(this.state.lastName);
    console.log(this.state.identification);
    axios.post('http://dia-api.mellow.online/api/Contacts', {
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      topic: this.state.birthdate,
      message: this.state.message,
      occupation: this.state.estado,
      business: this.state.business,
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
    console.log('Esta es la fecha de nacimiento: '+this.state.birthdate);
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
                          <input type="text" placeholder="Nombre y apellidos *" required onChange={this.handleSetName} pattern="[A-Za-z]+"/>
                        </div>
                        <div className="col-sm-6 dte__picker">
                          <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            locale="es-mx"
                            placeholderText="Fecha de nacimiento" 
                            showYearDropdown
                            showMonthDropdown
                            dateFormatCalendar="MMMM"
                            scrollableYearDropdown
                            yearDropdownItemNumber={100}
                            />
                          <small className="small">Fecha de nacimiento</small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <select required onChange={this.handleSetEstado}>
                            <option value="estado">Estado *</option>
                            <option value="Aguascalientes">Aguascalientes</option>
                            <option value="Baja_California">Baja California</option>
                            <option value="Baja_California_Sur">Baja California Sur</option>
                            <option value="Campeche">Campeche</option>
                            <option value="Coahuila_de_Zaragoza">Coahuila de Zaragoza</option>
                            <option value="Colima">Colima</option>
                            <option value="Chiapas">Chiapas</option>
                            <option value="Chihuahua">Chihuahua</option>
                            <option value="Distrito_Federal">Distrito Federal</option>
                            <option value="Durango">Durango</option>
                            <option value="Guanajuato">Guanajuato</option>
                            <option value="Guerrero">Guerrero</option>
                            <option value="Hidalgo">Hidalgo</option>
                            <option value="Jalisco">Jalisco</option>
                            <option value="Mexico">México</option>
                            <option value="Michoacan de Ocampo">Michoacán de Ocampo</option>
                            <option value="Morelos">Morelos</option>
                            <option value="Nayarit">Nayarit</option>
                            <option value="Nuevo_Leon">Nuevo León</option>
                            <option value="Oaxaca">Oaxaca</option>
                            <option value="Puebla">Puebla</option>
                            <option value="Queretaro">Querétaro</option>
                            <option value="Quintana_Roo">Quintana Roo</option>
                            <option value="San_Luis_Potosi">San Luis Potosí</option>
                            <option value="Sinaloa">Sinaloa</option>
                            <option value="Sonora">Sonora</option>
                            <option value="Tabasco">Tabasco</option>
                            <option value="Tamaulipas">Tamaulipas</option>
                            <option value="Tlaxcala">Tlaxcala</option>
                            <option value="Veracruz_de_Ignacio_de_la_Llave">Veracruz de Ignacio de la Llave</option>
                            <option value="Yucatan">Yucatán</option>
                            <option value="Zacatecas">Zacatecas</option>
                          </select>
                        </div>
                        <div className="col-sm-6">
                          <input type="email" placeholder="E-Mail *" required onChange={this.handleSetEmail}/>
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
