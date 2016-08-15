import React, {Component} from 'react';
import {Header} from './../header';
import {Home} from './../home/home';
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
    url: 'http://google.com',
    text: 'El rincón del mundo a donde va lo que se olvida',
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
    url: 'http://google.com',
    text: 'Sierra Norte de Oaxaca',
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
    url: 'http://google.com',
    text: 'Sierra Norte de Oaxaca',
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
    url: 'http://google.com',
    text: 'Arte Huichol en tenis orgánicos',
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
            <div className="col-sm-3">
              <Project {...projects[0]} />
            </div>
            <div className="col-sm-3">
              <Project {...projects[1]} />
            </div>
            <div className="col-sm-3">
              <Project {...projects[2]} />
            </div>
            <div className="col-sm-3">
              <Project {...projects[3]} />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
