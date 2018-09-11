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
import Temp from '../Temp'


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
  shouldComponentUpdate(nextProps) {
    return (this.props.path !== nextProps.path);
  }
  render() {
    console.log('Router render')  
    return (
      <div>
        <Switch>
          <Route exact path='/helloworld' component={HelloWorld}/>
          <Route exact path='/dynamicroute/:entityType/:entityCode' component={DynamicRoute}/>
          <Route exact path='/temp' component={Temp} />          
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
