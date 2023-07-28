import React, {Component} from 'react';

import './index.css';

import fintech from '../../images/fintech.png';
import QA from '../../images/QA.jpg';
import assurance from '../../images/assurance.jpeg';


export default class department extends Component {
  render() {
    return (
      <div id="libraries">
        <h2>
          <strong>DEPARTMENT</strong>
        </h2>
        <div id="img">
          <div>
            <img src={fintech} alt=" " id="fintech" />
            <h4 id="fintech">FINANCIAL TECHNOLOGY DEPARTMENT</h4>
          </div>
          <div>
            <img src={QA} alt=" " id="QA" />
            <h4 id="">ASSURANCE QUALITE DEPARTMENT</h4>
          </div>
          <div>
            <img src={assurance} alt=" " id="assurance" />
            <h4 id="">DEPARTEMENT D'ASSURANCE</h4>
          </div>
      </div>
      <button id="more" className="btn btn-dark btn-lg btn-block">
            see_more >>
          </button>
      </div>
    );
  }
}
