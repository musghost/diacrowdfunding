import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';
import {Project} from './project';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

const projects = [
  {
    link: 'Arte y Cultura',
    url: 'https://fondeadora.mx/projects/sun-gold-malibu',
    text: 'Sun Gold Malibú',
    style: {
      backgroundImage: 'url(assets/projects/project1.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  },
  {
    link: 'Deporte',
    url: 'https://fondeadora.mx/projects/animalpolitico',
    text: 'Animal Politico',
    style: {
      backgroundImage: 'url(assets/projects/project2.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  },
  {
    link: 'Deporte',
    url: 'https://www.briq.mx/proyectos/Quer%C3%A9taro%20Bellavista',
    text: 'Bellavista',
    style: {
      backgroundImage: 'url(assets/projects/project3.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  },
  {
    link: 'Diseño',
    url: 'https://hipgive.org/project/take-a-stand-against-human-trafficking/',
    text: 'Take a stand against human trafficking',
    style: {
      backgroundImage: 'url(assets/projects/project4.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  },
  {
    link: 'Diseño',
    url: 'https://playbusiness.mx/startups/modula/snapshot',
    text: 'Modula ',
    style: {
      backgroundImage: 'url(assets/projects/project4.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  },
  {
    link: 'Diseño',
    url: 'https://playbusiness.mx/startups/leco/snapshot',
    text: 'Leco',
    style: {
      backgroundImage: 'url(assets/projects/project4.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  },
  {
    link: 'Moonki',
    url: 'https://fondify.mx/Moonki',
    text: 'Moonki',
    style: {
      backgroundImage: 'url(assets/projects/project4.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  },
  {
    link: 'Diseño',
    url: 'https://fondify.mx/Adrian',
    text: 'Como ser un mexicano exitoso',
    style: {
      backgroundImage: 'url(assets/projects/project4.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  },
  {
    link: 'Diseño',
    url: 'http://expansive.mx/cruz-verde-188/',
    text: 'Cruz Verde',
    style: {
      backgroundImage: 'url(assets/projects/project4.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  },
  {
    link: 'Diseño',
    url: 'http://expansive.mx/adamant-merida-2/',
    text: 'Adamant',
    style: {
      backgroundImage: 'url(assets/projects/project4.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  },
  {
    link: 'Diseño',
    url: 'http://www.konsigue.com/quiero-invertir',
    text: 'Proyectos',
    style: {
      backgroundImage: 'url(assets/projects/project4.jpg)'
    },
    content: {
      title: 'El rincón del mundo a donde va lo que se olvida',
      tag: 'ARTE Y CULTURA',
      text: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Curabitur ut orci in risus dignissim tristique eu ut massa.</p>
          <p>Nulla vel enim massa. Fusce tincidunt, orci sit amet aliquet maximus, urna ipsum bibendum felis, quis lobortis urna ex eget massa. Sed euismod lacus non nunc luctus, non ullamcorper eros malesuada. Fusce sed ullamcorper lacus.</p>
        </div>
      )
    }
  }
];

export class Projects extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <div id="projects" className="main">
          <h1 className="text-center">Proyectos</h1>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Project {...projects[0]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[1]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[2]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[3]}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Project {...projects[4]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[5]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[6]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[7]}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Project {...projects[8]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[9]}/>
            </div>
            <div className="col-md-3 col-sm-6">
              <Project {...projects[10]}/>
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
