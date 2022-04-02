
import {Container, Row, Col} from 'react-bootstrap'

import { Paper, Grid, styled, Box, Icon} from '@mui/material'
import { makeStyles } from '@material-ui/styles'
//import { Logotipo } from '../assets/logobrand'
import StarIcon from '@mui/icons-material/Star';

const Logotipo = require('../assets/logobrand.png')

export default function Header(){

    const myContainerRow = {
        border: '2px solid blue', 
    }
    const myContainerRowCol = {
        border: '2px solid yellow',
        alignSel: 'end',
    }
    const myElement = {
        border: '2px solid white', 
    }

    const landingtopv2header = {
        border: '2px solid green', 
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
    }

    const classes = useStyles();
    return(
        <>
        <Grid container  style={{height: '100px',}} >

            <Grid item style={{ display: 'flex', alignItems: 'center',alignSelf:'center',height: '50px', }} >
                <img src={Logotipo} alt="logotipo" style={{borderRadius:'50%',height: '72px',width:'auto'}} />
                <h6 style={{marginLeft:'-10px'}} >Borges<strong style={{color: '#6AD8B1'}} >UX</strong> </h6>
            </Grid>
            <Grid item flexGrow='1'/>
            <Grid item direction="column" spacing={2} style={{display:'flex',alignItems:'center'}} className='m-2'>
                <div style={ {color:'#6AD8B1'} }>
                    <StarIcon  /> <StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/>
                </div> 
                <strong>5 Estrelas</strong>
            </Grid>

        </Grid>
        </>
    )
}


const useStyles = makeStyles((theme) => ({
    grid1: {
        border: '2px solid red',
        
    },
    grid2: {
        border: '2px solid yellow',
        display: 'inline-flex',
        alignItems: 'center',
        alignSelf: "center" ,
    },
    item1: {
        border: '2px solid blue',
        //alignItems: 'flex-start',
    },
    img1: {
        border: '2px solid purple',
    },
    imgLogotipo: {
        border: '5px solid purple',
        borderRadius: '50%',
        background: 'black',
        width: '52',
        height: '52',
    },
    root: {
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
      },
    grid: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display: "flex",
        justifyContent: "space-between",
      },

}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
