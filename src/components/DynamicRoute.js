import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import {debounce} from 'throttle-debounce';

export default class DynamicRoute extends Component {
    constructor(){
        super()
    }
    render() {
        return (
          <div>
            <h1>DynamicRoute</h1>
          </div>
        )
      }
}    