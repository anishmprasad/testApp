import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import './index.scss'

class Circular extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    show: true
  };
  // componentDidMount() {
  //   this.timeoutId = setInterval(function () {
  //     console.log("timeout")
  //     // this.setState({ show: false });
  //   }.bind(this), 10000);
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  //   if (this.timeoutId) {
  //     clearTimeout(this.timeoutId);
  //   }
  // }
  // componentWillReceiveProps(nextProps){
  //   if(this.props.canvas != nextProps.canvas){
  //     this.setState({ show : true})
  //   }
  // }
  render() {
    console.log(this.props.canvas);
    // const { summary, name } = this.props.canvas
    if (this.props.canvas) {
      console.log("render", this.props.canvas.iconUrlSmall);
      return (
        <div
          className={
            this.props.selectedProjectChanged
              ? "selected-project active"
              : "selected-project unactive"
          }
        >
          <div className="project-summary">
            <img src={`${this.props.canvas.iconUrlMedium}`} alt="logo" />
            <h5>{this.props.canvas.name}</h5>
            <p>{this.props.canvas.summary}</p>
          </div>
          <a className="text-btn" href={`${this.props.canvas.projecturl}`}>
            View Project
          </a>
        </div>
      );
    } else {
      return null;
    }
  }
}
function mapStateToProps(state) {
  return { 
    canvas: state.canvas && state.canvas.data, 
    selectedProjectChanged: state.canvas && state.canvas.isProjectChanged 
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { CanvasData },
//     dispatch
//   );
// }

export default connect(
  mapStateToProps,
  null
)(Circular);
