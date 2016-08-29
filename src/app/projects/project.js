import React, {Component} from 'react';

export class Project extends Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.image})`
    };

    return (
      <div className="project">
        <div className="mask">
          <h2>{this.props.name}</h2>
          <h5>{this.props.type}</h5>
          <div className="text-center clearfix"><span></span></div>
          <div>
            <p>{this.props.description}</p>
          </div>
        </div>
        <a href={this.props.link} target="_blank" className="link">Ir a: {this.props.name}</a>
        <div className="subpicture">
          <div className="clearfix">
            <a href={this.props.link} className="pull-right">{this.props.type}</a>
          </div>
          <p>{this.props.name}</p>
        </div>
        <div className="image" style={style}></div>
      </div>
    );
  }
}

Project.propTypes = {
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  link: React.PropTypes.string,
  image: React.PropTypes.string,
  description: React.PropTypes.string
};
