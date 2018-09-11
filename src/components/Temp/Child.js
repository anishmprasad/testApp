import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import { debounce } from 'throttle-debounce';
import { bindActionCreators } from "redux";
import { tempAction, tempActionUpdate} from "../../actions/Temp";


class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps')
    }
    onClick = (name , key) => {
        this.props.tempActionUpdate(key,name)
    }
    render() {
        return (
            <div>
                <label>
                    {this.props.data.name}
                    <input
                        type="text"
                        value={this.state[this.props.data.value] == null ? '' : this.state[this.props.data.value]}
                        onChange={this.handleChange}
                        name={this.props.data.value}
                    />
                </label>
                <input value="Submit" type="submit" onClick={() => this.onClick(this.props.data.name , this.state[this.props.data.value] )} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    // console.log(state, ownProps)
    return {
    };
}

// const { leagues = [] } = state;
// return {
//     league: leagues.filter(aLeague => aLeague.id === ownProps.match.params.id)[0]
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { tempAction, tempActionUpdate },
        dispatch
    );
}


export default withRouter(connect(null, mapDispatchToProps)(Child));