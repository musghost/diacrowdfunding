import React, {Component} from 'react';
import {Header} from './../header';
import {Home} from './../home/home';
import {Footer} from './../footer';


export class Cases extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id="cases">
          <h1 className="text-center">Casos de éxito</h1>
          <div className="container">
            <div className="case">
              <div className="row">
                <div className="col-sm-6">
                  <div className="image">
                    <img src="assets/cases/case1.jpg" />
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h1>Título Aquí...</h1>
                  <h4>Arte y cultura</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut orci in risus dignissim tristique eu ut massa. Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
                  <div>
                    <button>Ver Video</button>
                  </div>
                  <div>
                    <span>Via: Multicredi</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="case">
              <div className="row">
                <div className="col-sm-6">
                  <div className="image">
                    <img src="assets/cases/case1.jpg" />
                    <i className="fa fa-play" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h1>Título Aquí...</h1>
                  <h4>Arte y cultura</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut orci in risus dignissim tristique eu ut massa. Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
                  <div>
                    <button>Ver Video</button>
                  </div>
                  <div>
                    <span>Via: Multicredi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
