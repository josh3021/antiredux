import React from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store'; // env 파일 설정떄문에 가능

class AppContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      notifications: {
        1: {
          id: 1,
          text: "something",
          seen: false
        },
        2: {
          id: 2,
          text: "something 2",
          seen: false
        },
        3: {
          id: 3,
          text: "something 3",
          seen: false
        }
      }
    }
  }
  render () {
    return (
      <Store.Provider value={this.state}> 
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;