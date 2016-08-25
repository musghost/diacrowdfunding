import React, {Component} from 'react';

export class Platform extends Component {
  render() {
    return (
      <div className="platform">
        <div className="platform-icon">
          <img src={this.props.image}/>
        </div>
        <h3><a href={this.props.link} target="_blank">{this.props.name}</a></h3>
        <div className="inner-text">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

Platform.propTypes = {
  image: React.PropTypes.string,
  name: React.PropTypes.string,
  text: React.PropTypes.string,
  link: React.PropTypes.string
};
