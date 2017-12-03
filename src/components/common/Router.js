import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import {debounce} from 'throttle-debounce';
import 'styleCommon/styles.scss';


class Router extends Component {
  constructor(props){
      super(props);
      
  }
  componentWillMount(){
    
  }
  componentDidMount(){
    const dom = ReactDOM.findDOMNode (this);
    dom.addEventListener ('mouseover', e => this.handleMouseDown (e));
  }

  componentWillReceiveProps(nextProps){
    
  }

  handleMouseDown(e){
  }

  contentBlockFlag(p){
    
  }

  hideHeaderOnFocus(value) {
    
  }
  onRouteChange() {
    
  }
  render() {
    return (
      <div>
        <Switch onChange={this.onRouteChange}>
          <Route exact path='/signup' component={SignupPage}/>
          <Route exact path='/study/learn/:entityType/:entityCode' component={LearnResults}/>
          <Route exact path='/practice' component={Practice}/>
          <Route exact path='/reset-password' component={VerificationPage}/>
          <Route exact path='/verification-page' component={EmailVerificationPage}/>
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default withRouter(connect(mapStateToProps)(Router));
