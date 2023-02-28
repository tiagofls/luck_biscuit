import React, { Component } from "react";
import './style.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      frase: ''
    };

    this.abre = this.abre.bind(this);
    this.frases = ['Exemplo de frase 1', 'Exemplo de frase 2', 'Exemplo de frase 3'];
  }

  abre(){
    let state = this.state;
    let num = Math.floor(Math.random() * this.frases.length);

    state.frase = '"' + this.frases[num] + '"';

    this.setState(state);
  }

  render(){
    return(

      <div className="container">
          <img className="img" alt="Biscoito da Sorte" src={require('./assets/biscoito.png')}/>
          <Botao nome="Abrir Biscoito" acao={this.abre}/>
          <h3 className="frase">{this.state.frase}</h3>
      </div>

    );
  }
}

class Botao extends Component{
  render(){
    return(

      <div>
        <button onClick={this.props.acao}>{this.props.nome}</button>
      </div>

    );
  }
}

export default App;