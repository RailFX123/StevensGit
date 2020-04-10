import React, { Component } from 'react';
import './footer.css';

class footer extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50">


          <div className="container text-center">

          <p>Un producto desarrollado por el quipo de Erick Fuente, Steven Colocho, David Natareno, Andrea Melgar, Jorge Gudiel y Oscar Ortiz</p>

          </div>
      

        </footer>
      </div>
    );
  }
}

export default footer;