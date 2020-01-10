import { combineReducers }  from 'redux';

export function handleDrawer(state = true, action){
    
    switch(action.type){
        case 'OPEN_DRAWER':
            return !state
        case 'CLOSE_DRAWER':
            return false;
        default:
            return state;

    }

}

export function handleDrawerSize(state=240,action){
    switch(action.type){
        case 'CHANGE_SIZE':
            return 240;
        default:
            return 240;
    }
}

export default combineReducers({
    handleDrawer,
    handleDrawerSize
  })
