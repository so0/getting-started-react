import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <Fragment>
        <div>
          Hello {name}!
        </div>
        <div>
          Bye
        </div>
      </Fragment>
    );
  }
}

export default App;