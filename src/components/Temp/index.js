import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import {debounce} from 'throttle-debounce';
import { bindActionCreators } from "redux";
import { tempAction } from "../../actions/Temp";
import Child from "./Child"


class Temp extends Component {
    constructor(props){
        super(props)
        this.state = { 
            input1: '' ,
            input2: ''
        };
        this.index = 0;
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        // console.log('A name was submitted: ' , this.state);
        // this.props.tempAction(this.state)
        event.preventDefault();
    }
    // componentWillReceiveProps(nextProps){
    //     console.log('componentWillReceiveProps')
    // }
    onClick = (key) => {
        // this.props.tempAction({ [key]: this.state[key] })
    }
    addmore = (index) => {

        this.props.tempAction(
            {
                value: 'input' + index,
                name: 'input' + index
            }
        )
    }
    shouldComponentUpdate(nextProps) {
        return (this.props.temp !== nextProps.temp);
    }
    render() {
        console.log('Temp render', this.props.temp )
        return (
          <div>
            <h2> temp is here </h2>
                <div >
                    {this.props.temp && this.props.temp.map( (data,index) => {
                        // if (data.name === 'Event 2') {
                        //     data = { ...e, name: 'Second Event' };
                        // }
                        return (
                            <Child
                                data = {data}
                                key={data.name} 
                                index = { index }
                            />
                        )
                    })}
                    <div className="addmore" onClick={() => this.addmore(this.index++)}>addmore</div>
                    {/* <label>
                        Name:
                        <input 
                            type="text" 
                            value={this.state.input1} 
                            onChange={this.handleChange} 
                            name = {"input1"}
                        />
                    </label>
                    <input value="Submit" type="submit" onClick={() => this.onClick('input1')} />
                    <label>
                        Name:
                        <input 
                            type="text" 
                            value={this.state.input2} 
                            onChange={this.handleChange} 
                            name={"input2"}                                
                        />
                    </label>
                    <input type="submit" value="Submit" onClick={() => this.onClick('input2')} /> */}
                </div>
          </div>
        )
      }
}    

function mapStateToProps(state, ownProps) {
    console.log(state,ownProps)
    return {
        temp: state.Temp
    };
}

// const { leagues = [] } = state;
// return {
//     league: leagues.filter(aLeague => aLeague.id === ownProps.match.params.id)[0]
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { tempAction },
        dispatch
    );
}

Temp.defaultProps = {
    data: [
        {
            value: 'input1',
            name: 'input1'
        }, {
            value: 'input2',
            name: 'input2'
        }, {
            value: 'input3',
            name: 'input3'
        }, {
            value: 'input4',
            name: 'input4'
        }
    ]
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Temp));