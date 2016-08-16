import React, {Component} from 'react';

const styles = {
  footer: {
    backgroundImage: 'url(assets/home/footer.jpg)'
  }
};

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={styles.footer} className="clearfix">
          <div className="row">
            <div className="col-md-1">
              <a href="#" className="round-button">
                <span className="fa fa-facebook"></span>
              </a>
              <a href="#" className="round-button">
                <span className="fa fa-twitter"></span>
              </a>
              <a href="#" className="round-button">
                <span className="fa fa-envelope"></span>
              </a>
            </div>
            <div className="col-md-11">
              <div className="text-right">
                <h3>¡FORMA PARTE DE LA COMUNIDAD DE<br/>FONDEO COLECTIVO EN NUESTRO PAÍS!</h3>
                <h4>ESTE 5 DE OCT. SE CELEBRARÁ EL “DÍA CROWDFUNDING”</h4>
                <p>Evento en línea que invita a inversionistas y a<br/>
                  emprendedores a formar parte de la comunidad de<br/>
                fondeo colectivo más grande de México.</p>
              </div>
            </div>
          </div>
        </footer>
        <div className="text-right">
          <p>
            Creado por Mellow C&C
            <img src="assets/home/mellow.png"/>
          </p>
        </div>
      </div>
    );
  }
}
