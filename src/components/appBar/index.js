import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  appBarOpen:{
    width:'82%'
  },
  appBarClose:{
    width:'100%'
  }
});

export default function AplicationAppBar(){

  const store = useSelector(state => state);
  const isOpen = store.handleDrawer;
  
  const classes = useStyle();

  const dispatch = useDispatch();

  function handlerDrawerOpen(){
    dispatch({type:'OPEN_DRAWER'});
  }

    return (
        <AppBar
        className={ isOpen ? classes.appBarOpen :  classes.appBarClose}
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