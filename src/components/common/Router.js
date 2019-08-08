import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import {debounce} from 'throttle-debounce';
import 'styleCommon/styles.scss';
import DynamicRoute from 'components/DynamicRoute';
import HelloWorld from 'components/HelloWorld'
import Graph from '../Graph';
import Home from 'components/Home'


export default class Router extends Component {

  render() {
    return <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/helloworld" component={HelloWorld} />
          <Route exact path="/dynamicroute/:entityType/:entityCode" component={DynamicRoute} />
          <Route exact path="/graph" component={Graph} />
        </Switch>
      </div>;
  }
}

// function mapStateToProps(state) {
//   return {
//     state
//   };
// }

// export default withRouter(connect(mapStateToProps)(Router));
