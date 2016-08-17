import React, {Component} from 'react';
import {Link} from 'react-router';

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to={'/'} className="navbar-brand">
                <img src="assets/diacrowdfunding.png"/>
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to={'/projects'}>Proyectos <span className="fa fa-angle-down"></span></Link>
                </li>
                <li>
                  <Link to={'/cases'}>Casos de éxito <span className="fa fa-angle-down"></span></Link>
                </li>
                <li>
                  <Link to={'/upload'}>Sube un proyecto <span className="fa fa-angle-down"></span></Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contacto <span className="fa fa-angle-down"></span></Link>
                </li>
                <li>
                  <Link to={'/training'}>Patrocinadores <span className="fa fa-angle-down"></span></Link>
                </li>
                <li className="platforms">
                  <Link to={'/platforms'}>
                    <span>Plataformas</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
