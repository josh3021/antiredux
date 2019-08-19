import React from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store'; // env 파일 설정떄문에 가능

class AppContainer extends React.Component {
  constructor (props) {
    super(props);

    this._seenNotification = (id) => {
      this.setState(currentState => {
        return {
          ...currentState,
          notifications: {
            ...currentState.notifications,
            [id]: {
              ...currentState.notifications[id],
              seen: !currentState.notifications[id].seen
            }
          }
        }
      })
    }

    this._deleteNotification = id => {
      this.setState(currentState => {
        const deletedState = delete currentState.notifications[id];
        return deletedState;
      });
    }

    this.state = {
      notifications: {
        1: {
          id: 1,
          text: "something",
          seen: true
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
      },
      seenNotification: this._seenNotification,
      deleteNotification: this._deleteNotification
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