import React, {Component} from 'react';

const styles = {
  benefits: {
    backgroundImage: 'url(assets/home/benefits.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  projects: {
    project1: {
      backgroundImage: 'url(assets/home/project1.png)'
    },
    project2: {
      backgroundImage: 'url(assets/home/project2.png)'
    },
    project3: {
      backgroundImage: 'url(assets/home/project3.png)'
    },
    project4: {
      backgroundImage: 'url(assets/home/project4.png)'
    }
  }
};

export class Home extends Component {
  render() {
    return (
      <div>
        <section id="principal">
          <div className="row">
            <div className="col-sm-5">
              <img src="assets/home/community.png" />
            </div>
            <div className="col-sm-6">
              <h1>¡Forma parte de la<br />comunidad de fondeo<br />colectivo en nuestro país!</h1>
              <h3>ESTE 5 DE OCT. SE CELEBRARÁ EL “DÍA CROWDFUNDING”</h3>
              <p>Evento en línea que invita a inversionistas y a emprendedores a formar parte de la comunidad de fondeo colectivo más grande de México.</p>
              <p>Por medio de donaciones o inversión, apoya desde hoy y hasta la fecha antes mencianada, a esos proyectos o campañas con los que tengas afinidad, o a aquellas causas de tu interés que estaremos compartiendo por este medio.</p>
              <div className="row">
                <div className="col-sm-6">
                  <span className="invest">¡INVIERTE HOY!</span>&nbsp;<span className="tag">#DíaCrowdfundingMX</span>
                </div>
                <div className="col-sm-6">
                  <a href="#" className="anchor-projects">VER PROYECTOS</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="description">
          <div className="row">
            <div className="col-sm-6 crowdfunding">
              <div>
                <h1>¿Qué es el<br />crowdfunding?</h1>
                <p>UNA FORMA DE FINANCIACIÓN ALTERNATIVA, QUE CONSISTE EN LA DIFUSIÓN PÚBLICA DE UN PROYECTO, CAUSA O NEGOCIÓ, Y EN EL FINANCIAMIENTO POR PARTE DE UN GRUPO DE INVERSIONISTAS O PRESTAMISTAS.</p>  
                <p className="secondary">A cambio, una compensación económica o la satisfacción de apoyar una causa.</p>
              </div>
            </div>
            <div className="col-sm-6 benefits">
              <div>
                <h3>Existen diferentes tipos de crowdfunding:</h3>
                <h2>Donaciones:</h2>
                <p>Los donadores invierten por creer en la causa, normalmente son causas sociales, de arte y cultura o personas que necesitan el apoyo.</p>
                <h2>Fondeo de deuda:</h2>
                <p>Los inversionistas reciben su dinero de vuelta con intereses, en este tipo de crowdfunding, no se tiene una parte de la empresa.</p>
                <h2>Equity crowdfunding:</h2>
                <p>Se invierte en una empresa o idea en cambio de una parte de las acciones de la compañía o proyecto.</p>
                <h2>Recompensa:</h2>
                <p>Se invierte en un proyecto o idea a cambio de una recompensa, generalmente material.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="clearfix" style={styles.benefits}>
          <h2 className="text-center">BENEFICIOS DE INVERTIR POR CROWDFUNDING:</h2>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="benefit">
                  <img src="assets/home/invest1.png" />
                  <p>Amplía y conecta más fácilmente la oferta de proyectos interesantes y la financiación</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="benefit">
                  <img src="assets/home/invest2.png" />
                  <p>Amplía y conecta más fácilmente la oferta de proyectos interesantes y la financiación</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="benefit">
                  <img src="assets/home/invest3.png" />
                  <p>Amplía y conecta más fácilmente la oferta de proyectos interesantes y la financiación</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="community">
          <div className="row">
            <div className="col-sm-6">
              <div className="description">
                <h1>¡SE PARTE DE LA COMUNIDAD!</h1>
                <p>Mantente conectado, no te pierdas de nuestro newsletter donde recibirás noticias, oportunidades, consejos, entre otros.</p>
                <p>¡Apoyar es mucho más fácil de lo que crees!</p>
              </div>
            </div>
            <div className="col-sm-4">
              <form>
                <img src="assets/home/form.png" />
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nombre *" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="E-Mail *" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Interés" />
                </div>
              </form>
            </div>
            <div className="col-sm-2">
              <div className="text-right">
                <img src="assets/home/form.png" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="row">
            <div className="col-sm-3">
              <div className="project">
                <div className="image" style={styles.projects.project1}></div>
                <div className="subpicture">
                  <div className="clearfix">
                    <a href="#" className="pull-right">Salud</a>
                  </div>
                  <p><strong>Moonki: </strong>Wearable pensado para ayudar a mamás en la tarea de cuidar a sus pequeños.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="project">
                <div className="image" style={styles.projects.project2}></div>
                <div className="subpicture">
                  <div className="clearfix">
                    <a href="#" className="pull-right">Salud</a>
                  </div>
                  <p><strong>Moonki: </strong>Wearable pensado para ayudar a mamás en la tarea de cuidar a sus pequeños.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="project">
                <div className="image" style={styles.projects.project3}></div>
                <div className="subpicture">
                  <div className="clearfix">
                    <a href="#" className="pull-right">Salud</a>
                  </div>
                  <p><strong>Moonki: </strong>Wearable pensado para ayudar a mamás en la tarea de cuidar a sus pequeños.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="project">
                <div className="image" style={styles.projects.project4}></div>
                <div className="subpicture">
                  <div className="clearfix">
                    <a href="#" className="pull-right">Salud</a>
                  </div>
                  <p><strong>Moonki: </strong>Wearable pensado para ayudar a mamás en la tarea de cuidar a sus pequeños.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="brands">
          <div className="container">
            <img src="assets/home/logos.png" />
          </div>
        </section>

      </div>
    );
  }
}
