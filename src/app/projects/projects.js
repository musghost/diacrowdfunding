import React, {Component} from 'react';
import {Header} from './../header';
import {Footer} from './../footer';
import {Project} from './project';
import config from './../config';
import $ from 'jquery';

const createGroupedArray = function (arr, chunkSize) {
  const groups = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize));
  }
  return groups;
};

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

export class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes: []
    };
  }

  componentDidMount() {
    $.get(`${config.apiBase}/Projects`, result => {
      this.setState({
        nodes: result
      });
    });
  }

  render() {
    let nodes = createGroupedArray(this.state.nodes, 4).map((group, xid) => {
      let elems = group.map((node, xid) => {
        return (<div className="col-md-3 col-sm-6" key={xid}><Project {...node}/></div>);
      });
      return (<div className="row" key={xid}>{elems}</div>);
    });

    return (
      <div style={styles.container}>
        <Header/>
        <div id="projects" className="main">
          <h1 className="text-center">Proyectos</h1>
          {nodes}
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
