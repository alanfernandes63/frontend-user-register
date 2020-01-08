import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './style';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function Login(){

    const [password, changePassword] = useState("");
    const [userName, changeUsername] = useState("");

    const classes = useStyles();

    function handlerChangeUsername(e){
        changeUsername(e.target.value);
    }

    function handlerChangePassword(e){
        changePassword(e.target.value);
    }

    function login(){
        console.log("userName: " + userName);
        console.log("password: " + password);
    }

    return (
        <Container component="main" maxWidth="sm">
            <div className={ classes.paper }>
            <Avatar className={ classes.avatar }>
                    <AccountCircleIcon className={ classes.icon } />
            </Avatar>
            <Typography component="h1" variant="h5">
            Login
             </Typography>
            <form noValidate style={{width:'100%'}}>
                <Grid container justify="center">
                    <Grid item md={ 10 } sm={ 12 }>
                    <TextField onChange={ handlerChangeUsername } margin="normal" label="Username" variant="outlined" fullWidth />
                    <TextField onChange={ handlerChangePassword } margin="normal" label="Password" fullWidth variant="outlined" type="password" />
                    <Button size="large" onClick={ login } classes={{root:classes.root}} color="primary" variant="contained" fullWidth>Entrar</Button>
                    </Grid>
                </Grid>
            </form>
            </div>
        </Container>
    );
}