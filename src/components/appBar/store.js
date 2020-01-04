import { createStore } from 'redux';
import handleDrawer from './reducers';

const store = createStore(handleDrawer);

export default store;