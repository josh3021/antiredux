import React from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store'; // env 파일 설정떄문에 가능

class AppContainer extends React.Component {
  constructor (props) {
    super(props);

    this._changeMessage = () => {
      if (this.state.message === "1st") {
        this.setState({
          message: "2nd"
        });
      }
      else {
        this.setState({
          message: "1st"
        });
      }
    }

    this._countMessage = () => {
      this.setState({
        count: this.state.count + 1
      }, () => {
        this.setState({
          message: this.state.count + "번"
        })
      });
    }

    this.state = {
      count: 0,
      message: "0번",
      changeMessage: this._changeMessage,
      countMessage: this._countMessage
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