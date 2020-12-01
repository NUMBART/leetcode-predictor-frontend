import React, { Component } from 'react';
import UserList from './UserList';
import Header from './Header';

class Loader extends Component {
  render() {
    return (
      <div>
        <Header/>
        <UserList/>
      </div>
    );
  }
}

export default Loader;
