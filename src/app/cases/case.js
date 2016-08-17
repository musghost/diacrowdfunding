import React, {Component} from 'react';

export class Case extends Component {
  render() {
    return (
            <div className="case">
                 <div className="row">
                   <div className="col-sm-6">
                     <div className="image">
                       <img src={this.props.image}/>
                      <a href={this.props.url} target="_blank">
                          <i className="fa fa-play" aria-hidden="true"></i>
                      </a>
                     </div>
                   </div>
                   <div className="col-sm-6">
                     <h1>{this.props.project}</h1>
                     <h4>{this.props.type}</h4>
                     <p>{this.props.text} </p>
                     <div>
                        <a href={this.props.url} target="_blank">
                          <button>Ver Proyecto</button>
                        </a>
                     </div>
                     <div>
                       <span>Via: {this.props.via}</span>
                     </div>
                   </div>
                 </div>
               </div>
    );
  }
}

Case.propTypes = {
  project: React.PropTypes.string,
  type: React.PropTypes.string,
  url: React.PropTypes.string,
  text: React.PropTypes.string,
  via: React.PropTypes.string,
  image: React.PropTypes.string
};
