import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './style';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function Login(){

    const classes = useStyles();

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
                    <TextField margin="normal" label="Username" variant="outlined" fullWidth />
                    <TextField margin="normal" label="Password" fullWidth variant="outlined" type="password" />
                    <Button classes={{root:classes.root}} color="primary" variant="contained" fullWidth>Entrar</Button>
                    </Grid>
                </Grid>
            </form>
            </div>
        </Container>
    );
}