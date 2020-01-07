import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => (
    {
      paper:{
        marginTop:theme.spacing(8),
        backgroundColor:'#e2e7e4',
        //height:theme.spacing(7) * 4,
        flexDirection:'column',
        alignItems:'center',
        display:'flex',
        width:'100%',
        height:400
      },
      large:{
        heigth:100
      },

      submit: {
        color:'red',
        margin: theme.spacing(3, 0, 2),
      },
      root:{
        color:'red',
        background:'red',
        margin: theme.spacing(3, 0, 2),
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


  export default useStyles;