import { combineReducers }  from 'redux';

export function handleDrawer(state = true, action){
    
    switch(action.type){
        case 'OPEN_DRAWER':
            return true;
        case 'CLOSE_DRAWER':
            return false;
        default:
            return state;

    }

}

export function handleDrawerSize(state=240,action){
    switch(action.type){
        case 'CHANGE_SIZE':
            return action.state;
        default:
            return state;
    }
}

export default combineReducers({
    handleDrawer,
    handleDrawerSize
  })
