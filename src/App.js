import React from 'react';
import ComponenteDrawer from './components/drawer/index';
import AplicationAppbar from './components/appBar/index';
import { Provider } from 'react-redux';
import store from './components/appBar/store';

function App() {
  return (
    <div className="App">
    <Provider store={ store }>
     <AplicationAppbar></AplicationAppbar>
     <ComponenteDrawer></ComponenteDrawer>
     </Provider>
    </div>
  );
}

export default App;
