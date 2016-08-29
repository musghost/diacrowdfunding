import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';
import {Case} from './case';
import config from './../config';
import $ from 'jquery';

export class Cases extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes: []
    };
  }

  componentDidMount() {
    $.get(`${config.apiBase}/Cases`, result => {
      this.setState({
        nodes: result
      });
    });
  }

  render() {
    let cases = this.state.nodes.map((_case, idx) => {
      return (<Case key={idx} {..._case}/>);
    });
    return (
      <div >
        <Header/>
        <div id="cases" className="main">
          <h1 className="text-center">Casos de éxito</h1>
          <div className="container">
            {cases}
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
