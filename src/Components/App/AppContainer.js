import React from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store'; // env 파일 설정떄문에 가능

class AppContainer extends React.Component {
  render () {
    return (
      <Store.Provider> 
        <AppPresenter />
      </Store.Provider>
    )
  }
}

export default AppContainer;