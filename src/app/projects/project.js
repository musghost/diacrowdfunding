import React, {Component} from 'react';

export class Project extends Component {
  render() {
    return (
      <div className="project">
        <div className="mask">
          <h2>{this.props.content.title}</h2>
          <h5>{this.props.content.tag}</h5>
          <div className="text-center clearfix"><span></span></div>
          {this.props.content.text}
        </div>
        <a href={this.props.url} target="_blank" className="link">Ir a: yotepresto</a>
        <div className="subpicture">
          <div className="clearfix">
            <a href={this.props.url} className="pull-right">{this.props.link}</a>
          </div>
          <p>{this.props.text}</p>
        </div>
        <div className="image" style={this.props.style}></div>
      </div>
    );
  }
}
