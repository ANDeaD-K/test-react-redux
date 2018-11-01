import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/test-items';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <>
        <div>This is test page</div>
        <ol>
          {this.props.items.map(item => {
            return <li>{item.Title}</li>
          })}
        </ol>
      </>
    );
  }
}

// export default App;

const mapStateToProps = (state) => {
  return {
    items: state.testItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(itemsFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
