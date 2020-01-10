import React from 'react';
import ComponenteDrawer from './components/drawer/index';
import AplicationAppbar from './components/appBar/index';
import { Provider } from 'react-redux';
import store from './components/appBar/store';
//import Login from './pages/login/login';

import SimpleTable from './components/tables/user';

function App() {
  
  return (
    <div className="App">
    <Provider store={ store }>
     <AplicationAppbar></AplicationAppbar>
      <SimpleTable></SimpleTable>
     <ComponenteDrawer></ComponenteDrawer>
     </Provider>
    </div>
  );
}

export default App;
