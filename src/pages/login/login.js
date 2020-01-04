import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles( theme => (
    {
      paper:{
        marginTop: theme.spacing(8),
        backgroundColor:'#e2e7e4',
        height:theme.spacing(7) * 2,
        flexDirection:'column',
        alignItems:'center',
        display:'flex'
      },

        form:{
              width:'100%',
          },
        avatar:{
            margin:theme.spacing(1),
            backgroundColor: 'white',//theme.palette.secondary.main,
            width:theme.spacing(10),
            height:theme.spacing(10)
        },

        icon:{
            fontSize:theme.spacing(12),
            color:theme.palette.secondary.main,
        }
    }
  ));


export default function Login(){

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" style={{ height:100}}>
            <div className={ classes.paper }>
            <Avatar className={ classes.avatar }>
                    <AccountCircleIcon className={ classes.icon } />
            </Avatar>
            <form noValidate>
                <Grid container>
                </Grid>
            </form>
            </div>
        </Container>
    );
}