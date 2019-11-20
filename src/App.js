import React, { Component } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header titulo = 'Cotiza Criptomonedas al Instante'/>
        <div className="row justify-content-center ">
          <div className="col-md-6 bg-light pb-4 contenido-principal">
              <Formulario />
          </div>
        </div>
      </div>
    )
  }
}

