import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';

export default function AplicationAppBar(){

  const dispatch = useDispatch();

  function handlerDrawerOpen(){
    dispatch({type:'OPEN_DRAWER'});
  }

    return (
        <AppBar
        position="fixed"
      >
        <Toolbar>
          <IconButton
            onClick={ handlerDrawerOpen }
            color="inherit"
            aria-label="open drawer"
            edge="start"
            
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
}