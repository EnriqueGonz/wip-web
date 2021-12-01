import React, {Component} from 'react';

class FragmentReedem extends Component{
  render(){
      return(
          <div>
            <div>
                <div className="navbar navbar-expand-lg navbar-light navContainer" style={{backgroundColor:"#D8D8D8"}}>
                    <h3>Usuario#120</h3>
                    <h2>Rasca tu regalo</h2>
                    <h4>750 pts</h4>
                </div>
            </div>
            <div className="background-reedem">
                    <button className="align-text-bottom">Abrir</button>
            </div>
          </div>
      )
  }

}

export default FragmentReedem;