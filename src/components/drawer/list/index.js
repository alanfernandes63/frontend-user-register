import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [openListTodos, setOpenListTodos] = React.useState(true);
  const [openListUsers, setOpenListUsers] = React.useState(false);

  

  const handleClickListTodos = () => {
    setOpenListTodos(!openListTodos);
  };

  const handleClickListUsers = () =>{
    setOpenListUsers(!openListUsers);
  }


  
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
        
      }
    >
      <ListItem button onClick={ handleClickListUsers }>
        <ListItemIcon>
          <PersonOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
        {openListUsers ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={ openListUsers } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Add" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={ handleClickListTodos }>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Todos" />
        {openListTodos ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={ openListTodos } timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}