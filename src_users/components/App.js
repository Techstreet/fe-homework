  import React from "react";
  import { connect } from "react-redux";
  import { bindActionCreators } from 'redux';
  import "../stylesheets/main.scss";
  import * as actionCreators from '../actions/actions';
  import MainUserComponent from './MainUserComponent'

  // App component
  class App extends React.Component {

    // render
    render() {
      return (
        <div>
        </div>
        )
      }
    }

    function mapStateToProps(state) {
      return {
        rootData: state
      }
    }

    function mapDispachToProps(dispatch) {
      return bindActionCreators(actionCreators, dispatch)
    }

    export default connect(mapStateToProps, mapDispachToProps)(App)
