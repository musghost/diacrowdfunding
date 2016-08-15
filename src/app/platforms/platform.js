import React, {Component} from 'react';

export class Platform extends Component {
  render() {
    return (
      <div className="platform">
        <div className="platform-icon">
          <img src={this.props.image} />
        </div>
        <h3>{this.props.name}</h3>
        <div className="inner-text">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
