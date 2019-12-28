import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const listStyle = makeStyles({
  list:{
    width:250,
  }
})

const list = () => {
  const classes = listStyle()
  return(
<div className={ classes.list } role="presentation">
  <List>
    {
      ['teste1','teste2'].map(
          (text, index) => (
          <ListItem button key={ text }>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={ text }></ListItemText>
          </ListItem>
          )
      )

    }
  </List>
<Divider/>
  <List>
  {
    ['teste1','teste2'].map(
        (text, index) => (
        <ListItem button key={ text }>
          <ListItemText primary={ text }></ListItemText>
        </ListItem>
        )
    )

  }
  </List>
  </div>
  )
}

export default function Mybutton(){
  return(
    <Drawer open={true}>
      { list() }
    </Drawer>
  );
}